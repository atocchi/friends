//require modules
const express = require ('express');
const app = express();
const path = require("path");
//declare port
const PORT = 3030


//let express parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./apiRoutes")(app);
//Set Basic Routes

//Homepage Route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/home.html"));
  });

//Survey Route
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/survey.html"));
  });

//404 Route
app.get("/:catch", function(req, res) {
    let choice = req.params.catch;
    return res.json(`404: Sorry we could not find ${choice}, maybe you got lost?`)
  });

//starts express server 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  