const login = (req, res, next) => {
  if (req.body.password != "123") {
    res.json({ message: "POST login success" });
  } else {
    res.status(500).json({ message: "POST login failed" });
  }
};

module.exports = { login };
