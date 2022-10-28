const express = require("express");
const loginRoutes = require("./routes/auth");
const store = require("store");
const app = express();

store.set("isLoggedIn", false);
store.set("username", "");

//json
app.use(express.json());

//static
app.use(express.static(__dirname + '/public'));

//ejs
app.set("view engine", "ejs");

//routes
app.use(loginRoutes);

//pages
app.get("/", (req, res) => {
  const isLoggedIn = store.get("isLoggedIn");
  if (!isLoggedIn) {
    res.redirect("/login");
  } else {
    res.render("index.ejs", {
      userName: store.get("username"),
    });
  }
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
