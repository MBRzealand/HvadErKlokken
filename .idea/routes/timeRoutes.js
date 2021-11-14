const express = require("express");
const timeModel = require("../models/time");
const app = express();

app.get("/times", async (request, response) => {
    const times = await timeModel.find({});
    response.setHeader('Content-Type', 'application/json');

    try {
        response.send(JSON.stringify(times, null, 2));

    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/time", async (request, response) => {
    const score = new timeModel(request.body);

    try {
        await score.save();
        response.send(score);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;