var express = require("express");

const SERVER_PORT = 3001;
var app = express();

//Get request for hello
// https.localhost:3001/hello
app.get("/hello", (req, res) => {
  res.status(200).send("Hello Express JS");
});

//Query method for get request
//http://localhost:3001/user?firstname=Maharshi&lastname=Barot
app.get("/user", (req, res) => {
  const p = {
    firstname: req.query.firstname,
    lastname: req.query.lastname,
  };

  res.status(201).send(p);
});

//Post method for post request
//http://localhost:3001/user/Maharshi/Barot
app.post("/user/:firstname/:lastname", (req, res) => {
  const p = {
    firstname: req.params.firstname,
    lastname: req.params.lastname,
  };
  res.status(201).send(p);
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://localhost:${SERVER_PORT}/`);
});
