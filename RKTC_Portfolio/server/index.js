const express = require("express");

const app = express();
//created en express application

app.get("/", (req, res) => {
    res.send("Backend is Running!")
})

app.listen(1122, () => {
    console.log(`Server is running at the port ${1122}`);
})