/*
 */

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

//config the server
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//static

//config the middleware
app.use(bodyParser.urlencoded({ extended: false }));

//rutas
app.get("/", (req, res) => {
  res.render("index");
});

//renderizado

//start the server
app.listen(app.get("port"), () => {
  console.log("server listen in the port", app.get("port"));
});
