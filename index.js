const express = require('express');
const app = express();
require("dotenv").config();

const port = process.env.PORT; // Set a default value for port if not defined

app.get("/", (req, res) => {
  console.log("GET request received");
  res.sendFile("index.html", { root: __dirname + "/public" });
});

app.use(express.json());

app.use("/bard/getPrompt", require("./routes/route.js"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
