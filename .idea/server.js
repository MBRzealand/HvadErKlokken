require('dotenv').config({path:"./.env"})
const express = require("express");
const mongoose = require("mongoose");
const scoreRouter = require("./routes/timeRoutes.js");

const app = express();

app.get('/', function(request, response){
    response.sendFile('C:\\Users\\mikma\\HvadErKlokken\\.idea\\HvadErKlokken\\HvadErKlokken.html');
});

app.get('/script', (req,res) => {
    res.sendFile("C:\\Users\\mikma\\HvadErKlokken\\.idea\\HvadErKlokken\\HvadErKlokken.js");
});

app.get('/css', (req, res) => {
    res.sendFile("C:\\Users\\mikma\\HvadErKlokken\\.idea\\HvadErKlokken\\HvadErKlokken.css");
});

app.use(express.static('C:\\Users\\mikma\\HvadErKlokken\\.idea\\HvadErKlokken'))
app.use(express.json());

mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(scoreRouter);

app.listen(3000, () => {
    console.log("Server is running...");
});