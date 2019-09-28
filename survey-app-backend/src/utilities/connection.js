const mongoose = require('mongoose');
 
mongoose.Promise=global.Promise;
mongoose.set('useCreateIndex',true);

const question={
    "qId": String,
    "question": String,
    "type":String,
    "options":[String]
}

const survey={
    "surveyId": String,
    "questions":[String],
    "start": Date,
    "end": Date,
    
}
const org  = {
    "id": String,
    "survey": [survey],

}


let Schema = mongoose.Schema(org, { collection: 'org' }); 
let qSchema = mongoose.Schema(question, { collection: 'question' }); 
 


let connection = {};

connection.getCollection=()=>{
    return mongoose.connect('mongodb://localhost:27017/hackathon', { useNewUrlParser: true })
    .then((database) => {
        return database.model("org", Schema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database")
        err.status = 500;
        throw err;
    })
}

connection.getQuestionCollection=()=>{
    return mongoose.connect('mongodb://localhost:27017/hackathon', { useNewUrlParser: true })
    .then((database) => {
        return database.model("question", qSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database")
        err.status = 500;
        throw err;
    })
}


module.exports = connection;
