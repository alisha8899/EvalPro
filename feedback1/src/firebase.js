import firebase from "firebase";


        const firebaseApp = firebase.initializeApp({

            apiKey: "AIzaSyBcxz6YW2LGPc0hOuTOIef49M6yktIL7xU",
            authDomain: "sfeedback-bot-v1-gasw.firebaseapp.com",
            projectId: "feedback-bot-v1-gasw",
            storageBucket: "sfeedback-bot-v1-gasw.appspot.com",
            messagingSenderId: "941585629045",
            appId: "1:941585629045:web:2c7bf320f713e370021d3c",
            measurementId: "G-6G46N5C190"
        });



        const db = firebaseApp.firestore();
        console.log("firestore connection established");

export const getProfessorFeedback =(name) => {
    var professorName = name;
    db.collection("feedback_table").where("professorName","==",professorName)
    .get()
    .then(querySnapshot=> {
        const data = querySnapshot.docs.map(doc => doc.data());
        localStorage.setItem("data", JSON.stringify(data));
        console.log(data);
    })

}

export const getTotalHoursSpentForClass = (parameter) => {
    var attribute = parameter;
    var data = JSON.parse(localStorage.getItem("data"))
    var x = [];
    var hashmap = new Map();
    var values = [];
    var numbers = [];
    for(var i=0; i<data.length; ++i )
        {
        if(data[i][attribute] !== undefined)
        {
        x.push(parseInt(data[i][attribute]))
        }
    }
    x = x.sort(function(a, b) {
  return a - b;
});
    for(var i=0; i<x.length; ++i )
        {
        if(!hashmap.has(x[i]))
        {
        hashmap.set(x[i],1)
        }
        else
        {
        hashmap.set(x[i], hashmap.get(x[i])+1)
        }
    }
    var mapIter = hashmap.keys();
    for(var i=0; i<hashmap.size; ++i )
        {
            if(hashmap.has(x[i]))
            {
            values.push(hashmap.get(x[i]))
            numbers.push(mapIter.next().value)
        }
    }
    var result = []
    result.push(values)
    result.push(numbers)
    return result;   
}

    export const getResponses = (parameter) => {
    var attribute = parameter;
    var data = JSON.parse(localStorage.getItem("data"))
    var x = [];
    for(var i=0; i<data.length; ++i )
        {
        if(data[i][attribute] !== undefined)
        {
        x.push(data[i][attribute])
        }
    }
    var y = document.querySelectorAll('#response')
    for (i = 0; i < y.length; ++i) 
    {
        y[i].innerText = x[i];

}

    }





//export { db };
//export default firebase;