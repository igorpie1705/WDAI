const jwt = require("jsonwebtoken");
const SECRET_KEY = "7s2kFJvL3nMeQ8R1Pz0XyW4vT9gB6dCjH5aN1mOoV2k";

exports.authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Odmowa dostępu." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: "Nieprawidłowy token." });
  }
};
