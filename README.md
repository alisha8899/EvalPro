# EvalPro

This is the source code for the Senior Project for the EvalPro application component, which is a React web application which allows Professors to view feedback that has been submitted by students through our Dialogflow conversational agent. 

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

## Running the Project Locally

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
