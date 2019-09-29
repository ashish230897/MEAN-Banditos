const initialData = require("./org.json")
const initialQues = require("./ques.json")
const collection = require("../utilities/connection")


let model = {}

//DummyDATA
model.insertData = () => {
    return collection.getCollection().then((collection) => {
        return collection.deleteMany().then((data) => {
            return collection.insertMany(initialData).then((response) => {
                if (response && response.length > 0) {
                    return model.insertQuestion().then((questions) => {
                        return response.length + questions;
                    });
                } else {
                    let err = new Error("Data insertion failed")
                    err.status = 500
                    throw new Error
                }
            })
        })
    })
}

model.insertQuestion = () => {
    return collection.getQuestionCollection().then((collection) => {
        return collection.deleteMany().then((data) => {
            return collection.insertMany(initialQues).then((response) => {
                if (response && response.length > 0) {
                    return response.length
                } else {
                    let err = new Error("Data insertion failed")
                    err.status = 500
                    throw new Error
                }
            })
        })
    })
}


//--------------------------------------------------------
// Call this function while registering

model.checkIfExists = (id) => {
    return collection.getCollection().then((collection) => {
        return collection.find({id: id}).then((res)=>{
            if(res)
                return true;
            else
                return false
        }).catch(() => {
            return false;
        })
    })
} 

model.createOrg = (obj) => {
    return model.generateOrgId().then((data)=>{
        //console.log(data);
        // let orgId = data;
        // obj.id = orgId;
        console.log("Inside backend", obj)
        obj.survey = [];
        return collection.getCollection().then((collection) => {
            return model.checkIfExists(obj.id).then(response => {
                if(!response)
                    return collection.create(obj).then((data)=>{
                        console.log("Hey");
                        return data;
                        
                    })
                else
                    console.log("exists");
            })
            
        })
    })
}

model.generateOrgId = () => {
    orgIds = []
    return collection.getCollection().then((collection)=>{
        return collection.find({}, {id:1}).then((data)=>{
            console.log(data);
            data.forEach(element => {
                orgIds.push(element.id);
            });
            return orgIds.length ==0 ? 0 : Math.max(...orgIds) + 1;
        })
    })
}
// console.log(model.createOrg({}));
//------------------------------------------------------------



//Insert a survey entered by the organiser
//------------------------------------------------------------
model.insertSurvey = (obj) => {
    return model.generateSurveyId().then((data)=>{
        let sid=data;
        return model.generateQuestionId(obj.questions.length).then((qIdArr)=>{
            //console.log("question id array : ",qIdArr);
            // let qIdArr=qIdArr;
            let survey = {
                surveyId : sid,
                questions : qIdArr,
                start : obj.start,
                end : obj.end,
            }
            qIdArr.forEach((ele,index)=>{
                obj.questions[index].qId=ele;
            })
            //console.log("questions obj array : ",obj.questions);
            let orgId = obj.id;
            return collection.getCollection().then((collection)=>{
                return collection.update({id : orgId}, {$push : {"survey" : survey}}).then((data)=>{
                    //console.log("after inserting survey ",data);
                    if(data.nModified==0){
                        return null;
                    }
                    else{
                    return model.pushQuestion(obj.questions).then((data)=>{
                        //console.log("after inserting questions ",data);
                        return data;
                    })
                }
                })
            })
        })
    });


   
}

model.generateSurveyId = ()=>{
    surveyIds = []
    return collection.getCollection().then((collection) => {
        return collection.find({}, {"survey" : 1}).then((data)=>{
            //console.log(data);
            data.forEach(element => {
                element.survey.forEach((ele)=>{
                    surveyIds.push(ele.surveyId);
                });
               
            });
             return (surveyIds.length == 0) ? 0 : Math.max(...surveyIds) + 1;
        });
     });  
}
    

model.generateQuestionId = (count) => {
    questionIds = []
    return collection.getQuestionCollection().then((collection)=>{
        return collection.find({}, {"qId":1}).then((data)=>{
            data.forEach(element => {
                questionIds.push(element.qId);
            });
            let temp= questionIds.length == 0? -1: Math.max(...questionIds);
            let qIdArr=[];
            while(count--){
                qIdArr.push(++temp);
            }
            return qIdArr;
        });
    })
    return (questionIds.length == 0) ? 0 : Math.max(...questionIds) + 1;
}

model.pushQuestion = (questionArr) => {
    return collection.getQuestionCollection().then((collection)=>{
        return collection.insertMany(questionArr).then((data)=>{
            return data;
        })
    })
}

// let dummy = {
//     start : "2019-05-15",
//     end : "2019-06-15",
//     id : "1",
//     questions : [{
    
//         "question":"who do you think will win 2024?",
//         "type":"1",
//         "options":["BJP","Congress","Coilation"],
//         "answers":[]
//     },
//     {

//         "question":"will BJP win 2024?",
//         "type":"2",
//         "options":["Yes","No"],
//         "answers":[]
//     }]
// }
// console.log(model.insertSurvey(dummy));
//-------------------------------------------------------------------

//Getting the list of surveys for organiser to view
//------------------------------------------------------------------

model.getSurveysByOrg = (orgId) => {
    return collection.getCollection().then((collection) => {
        return collection.findOne({id:orgId}).then((orgObj) => {
            // console.log(orgObj.survey);
            return orgObj.survey;
        })
    })
}
// console.log(model.getSurveysByOrg("2"));
//--------------------------------------------------------------------

//Get questions for a survey after clicking on it
//--------------------------------------------------------------------

model.getSurveyDetails = (surveyId)=>{
    let obj = {surveyId : surveyId}
    return collection.getCollection().then((orgCollection) => {
        return orgCollection.findOne({survey : {$elemMatch : {"surveyId" : surveyId}} }).then((data) => {
            console.log("Document containing the given surveyid", data);
            let surveys = data.survey;
            let survey = {}
            surveys.forEach((element) => {
                if(element.surveyId == surveyId)
                    survey = element;
            });
            
            let questionIds = survey.questions;
            
            return collection.getQuestionCollection().then((qCollection) => {
                return qCollection.find({qId : {$in : [...questionIds]}}).then((data)=>{
                    console.log(data);
                    obj.questions = data;
                    return obj;
                })
            });
        });
    })
}

// console.log(model.getSurveyDetails("0"));
//---------------------------------------------------------------------------


//---------------------------------------------------------------
//obj ={surveyId:surveyId,response:[{qId:answer}]}
model.pushResponse=(obj)=>{
    return collection.getQuestionCollection().then((collection)=>{
        obj.qIds.forEach((ele, index)=>{
            // console.log(ele, obj.answers[index]);
            return model.insertAnswer(ele, obj.answers[index]).then((data)=>{
                return ;
                })
            })
 
})
}

model.insertAnswer = (qId,answer) => {
    return collection.getQuestionCollection().then((collection)=>{
        return collection.update({qId : qId},{$push : {answers: answer}}).then((data) => {
            console.log("data after updating the answer", data);
            return data;
        })
    })
}
let obj = {surveyId : "0", qIds:["0"], answers:["BJP"]}
model.pushResponse(obj);
//---------------------------------------------------------------------

model.getAnswer=(qId)=>{
    return collection.getQuestionCollection().then((collection)=>{
        return collection.findOne({qId:qId}).then((data)=>{
            return data;
        })
        
    })  
}

// model.generateSurveyId();


module.exports = model
