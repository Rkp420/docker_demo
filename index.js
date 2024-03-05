const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({msg : "Hi How are you ?"});
})

app.listen(process.env.PORT, () => {
    console.log("server is started");
})