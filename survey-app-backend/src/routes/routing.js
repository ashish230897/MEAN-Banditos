const express = require('express');
const routing = express.Router();
const service = require("../service/hackathon");

routing.get("/setupDB", (req, res, next) => {
    service.insertData().then((data) => {
        if (data) {
            res.status(201);
            res.json({ message: "Inserted " + data + " document in database" });
        }
    })
})


routing.post('/createOrganiser',  (req, res, next) => {
    //let username = req.body.username;
    //let password = req.body.password;
    let object = req.body;
    console.log("request for registering organiser received!!");
    service.createOrg(object).then((data) => {
        if (data) {
            res.status(201);
            res.json({ message: "Registered a new organiser " });
        }
    })
})


routing.post('/insertSurvey',  (req, res, next) => {
    let object = req.body;
    console.log("request for inserting survey received!!")
    service.insertSurvey(object).then((data) => {
        if (data) {
            res.status(201);
            res.json({ message: "Added a new survey" });
        }
    })
})


routing.get('/getSurveys/:orgId',  (req, res, next) => {
    let orgId = req.params.orgId;
    console.log("request for getting surveys received!!")
    service.getSurveysByOrg(orgId).then((data) => {
        if (data) {
            res.status(201);
            res.json({ message: "Received the surveys of this organisation.", data : data });
        }
    })
})

routing.get('/getSurveyDetails/:surveyId',  (req, res, next) => {
    let surveyId = req.params.surveyId;
    console.log("request for getting survey details received!!")
    service.getSurveyDetails(surveyId).then((data) => {
        if (data) {
            res.status(201);
            res.json({ message: "Received the survey details for this survey.", data : data });
        }
    })
})


module.exports = routing;