const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get("/", async (req, res) => {
  res.send(res);
});

app.listen(port, () => {
  console.log("App listening on Port");
});
