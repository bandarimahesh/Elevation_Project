const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (!err) {
        req.user = user;
        next();
      } else {
        return res.json(403).send("Token is invalid");
      }
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isSuperAdmin) {
      next();
    } else {
      res.json("You are not allowed to do that");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
