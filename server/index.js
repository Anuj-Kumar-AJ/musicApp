
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// creating api end point

app.get("/api", (req,res) => {
    res.json({message : "Hello from server"});
});

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
});