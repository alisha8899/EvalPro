# EvalPro

This is the source code for the Senior Project for the EvalPro application component, which is a React web application which allows Professors to view feedback that has been submitted by students through our Dialogflow conversational agent. There is also source code that builds the Dialogflow conversational agent, and instructions on integrating the bot with individual Slack channels. 

Link to Github Repository: https://github.com/alisha8899/EvalPro

## Course/Contributor Information

- University: San Jose State University
- Course: CMPE 195B/F
- Students: [Alisha Mehndiratta], [Reshma Nawaz], [Jinghui Ng], [Sachin Shah]

## Project Components

- Graphs and charts are provided by Plot.ly, a visualization library https://dash.plotly.com/
- Authentication services are provided via Google OAuth and Firebase authentication https://developers.google.com/identity/protocols/oauth2 , https://firebase.google.com/docs
- Cloud Storage for feedback data is provided via Google Firebase Firestore https://firebase.google.com/

- To view our conversational agent (Dialogflow) code, it is in the folder "Feedback-Bot-v1"
- To view our dashboard and database integration code, it is in the folder "feedback1"

## Integrating Dialogflow with Slack
``` 
Open https://api.slack.com/apps
Create a new app
Insert app name and select the desired workspace name
Under Features, select OAuth and Permissions
Select install to workspace
Under Settings, select basic information
Copy the Client ID, Client Secret, and Verification Token 
Open Dialogflow
Click on integrations
Under Text Based, select Slack and input the copied tokens 
Save your information 
Click test in Slack 
Click start 
Open Slack Channel to converse with conversational agent
```
-To view the fulfillment code that our Dialogflow conversational agent uses to write data to our Firestore instance go to the file: /Feedback-Bot-v1/function-source/index.js
## Quick Note on our Instance of Google Firestore
The configuration details for our firebase instance are contained in the file named firebase.js, in the feedback1 folder

## Running the Project Locally (Dashboard for Professors)

Clone the repository:

```
mkdir EvalPro
cd EvalPro
git clone https://github.com/alisha8899/EvalPro.git
```

Install dependencies and run applications (one terminal tab):

Frontend:

```
cd feedback1
npm install 
npm start
```
In case the project does not run after running these commands, please try to install these as well: 

```
cd feedback1
npm install firebase
npm install react-calendar
npm install react-google-login
npm install react-plotly.js
npm install google-auth-library
npm start
```

## Demonstration
https://drive.google.com/file/d/1eS544fzl0hjh6ohOR-EbyFie9l6FNFA9/view?usp=sharing 
