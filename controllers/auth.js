const store = require("store");

const login = (req, res, next) => {
  if (req.body.password !== "123") {
    store.set("isLoggedIn", true);
    store.set("username", req.body.email);
    res.json({ message: "POST login success111" });
  } else {
    store.set("isLoggedIn", false);
    store.set("username", "");
    res.status(500).json({ message: "POST login failed" });
  }
};

const logout = (req, res, next) => {
  store.set("isLoggedIn", false);
  store.set("username", "");
  res.json({ message: "POST logout success" });
};

module.exports = { login, logout };
