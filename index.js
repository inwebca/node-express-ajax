const express = require("express");
const routes = require("./routes/login");
const app = express();

app.use(express.json());
app.set("view engine", "ejs");

app.use("/", routes); //to use the routes

// index page (login)
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/dashboard", function (req, res) {
  res.render("pages/dashboard");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
