// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

// enables lib debugging statements
process.env.DEBUG = 'dialogflow:debug'; 

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  //data we get from quiz intent
  var classType = agent.parameters.classType;
  var professorName = agent.parameters.professorName;
  var hoursSpent = agent.parameters.hoursSpent;
  var quizScore = agent.parameters.quizScore;
  var lecturePrep = agent.parameters.lecturePrep;
  var assignmentType = agent.parameters.assignmentType;
  var homeworkPrep = agent.parameters.homeworkPrep;
  var improvement = agent.parameters.improvement;

  //to generate a feedback table and a unique id for each feedback
  var dialogflowAgentRef = db.collection("feedback_table").doc();  

  //data we get from midterm intent
  var midtermScore = agent.parameters.midtermScore;
  var prepared = agent.parameters.prepared;
  var midLecturePrep = agent.parameters.midLecturePrep;
  var midHomeworkPrep = agent.parameters.midHomeworkPrep;
  var midQuizPrep = agent.parameters.midQuizPrep;
  var midtermHours = agent.parameters.midtermHours;
  var yourMidtermScore = agent.parameters.yourMidtermScore;
  var additionalInfo = agent.parameters.additionalInfo;

  //data we get from homework intent
  var dateDue = agent.parameters.dateDue;
  var homeworkType = agent.parameters.homeworkType;
  var homeworkName = agent.parameters.homeworkName;
  var understanding = agent.parameters.understanding;
  var difficulty = agent.parameters.difficulty;

  //data we get from final intent
  var finalScore = agent.parameters.finalScore;
  var preparedForFinal = agent.parameters.preparedForFinal;
  var finLecturePrep = agent.parameters.finLecturePrep;
  var finHomeworkPrep = agent.parameters.finHomeworkPrep;
  var finQuizPrep = agent.parameters.finQuizPrep;
  var finMidtermPrep = agent.parameters.finMidtermPrep;
  var finalHours = agent.parameters.finalHours;
  var yourFinalScore = agent.parameters.yourFinalScore;
  var additionalInfoForFinal = agent.parameters.additionalInfoForFinal;


  //to get current date
  var date = new Date();
  //var dd = String(date.getDate()).padStart(2, '0');
  //var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  //var yyyy = date.getFullYear();
  //date = mm + '/' + dd + '/' + yyyy;
 
  //handler for welcome intent: to decide the next intent
  function welcome(agent) {
    console.log('welc default intent works');
    agent.add(`Welcome to my agent!`);
  }
 
  //handler for fallback intent: to handle unexpected user input
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

 //handler for welcome intent: to save data into database
 function handleSaveToDB_welcome(agent) {
    console.log('welc intent works');
    classType = agent.parameters.classType;
   /** 
   return db.runTransaction(t => {
      t.set(dialogflowAgentRef, {
        classType: classType,
        hoursSpent: hoursSpent,
        professorName: professorName});
      return Promise.resolve('Write complete');
    });
    **/
  }

  
  //handler for quiz intent: to save data into database
  function handleSaveToDB_quiz(agent) {
    //agent.add('Welcome to quiz intent!');
    console.log('quiz intent works');
    return db.runTransaction(t => {
      t.set(dialogflowAgentRef, {
        date: date,
        classType: classType,
        hoursSpent: hoursSpent,
        professorName: professorName,
        quizScore: quizScore,
        lecturePrep: lecturePrep,
        homeworkPrep: homeworkPrep,
        assignmentType: assignmentType,
        improvement: improvement});
      return Promise.resolve('Write complete');
    });
  }

  //handler for midterm intent: to save data into database
  function handleSaveToDB_midterm(agent) {
    console.log('midterm intent works');
    return db.runTransaction(t => {
      t.set(dialogflowAgentRef, {
        date: date,
        classType: classType,
        hoursSpent: hoursSpent,
        professorName: professorName,
        midtermScore: midtermScore,
        prepared: prepared,
        midLecturePrep: midLecturePrep,
        midHomeworkPrep: midHomeworkPrep,
        midQuizPrep: midQuizPrep,
        midtermHours: midtermHours,
        yourMidtermScore: yourMidtermScore,
        additionalInfo: additionalInfo,
        assignmentType: assignmentType});
      return Promise.resolve('Write complete');
    });
  }

  //handler for homework intent: to save data into database
  function handleSaveToDB_homework(agent) {
    console.log('homework intent works');
    return db.runTransaction(t => {
      t.set(dialogflowAgentRef, {
        date: date,
        classType: classType,
        hoursSpent: hoursSpent,
        professorName: professorName,
        dateDue: dateDue,
        homeworkType: homeworkType,
        homeworkName: homeworkName,
        understanding: understanding,
        difficulty: difficulty,
        assignmentType: assignmentType});
      return Promise.resolve('Write complete');
    });
  }

  //handler for final intent: to save data into database
  function handleSaveToDB_final(agent) {
    console.log('final intent works');
    return db.runTransaction(t => {
      t.set(dialogflowAgentRef, {
        date: date,
        classType: classType,
        hoursSpent: hoursSpent,
        professorName: professorName,
        finalScore: finalScore,
        preparedForFinal: preparedForFinal,
        finLecturePrep: finLecturePrep,
        finHomeworkPrep: finHomeworkPrep,
        finQuizPrep: finQuizPrep,
        finMidtermPrep: finMidtermPrep,
        finalHours: finalHours,
        yourFinalScore: yourFinalScore,
        additionalInfoForFinal: additionalInfoForFinal,
        assignmentType: assignmentType});
      return Promise.resolve('Write complete');
    });
  }

  //to map an existing Intent Flow to an Intent
  let intentMap = new Map();

  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('welcome', handleSaveToDB_welcome);
  intentMap.set('quiz', handleSaveToDB_quiz);
  intentMap.set('midterm', handleSaveToDB_midterm);  
  intentMap.set('homework', handleSaveToDB_homework);
  intentMap.set('final', handleSaveToDB_final);

  agent.handleRequest(intentMap);
});
