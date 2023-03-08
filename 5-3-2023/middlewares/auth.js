const { SECRET_KEY } = require("../data/key");
var jwt = require('jsonwebtoken');

exports.verify = (req, res, next) => {
    jwt.verify(req.headers.token, SECRET_KEY, function(err, decoded) {
        if (err) {
            return res.send("Authentication failed");
        }
        req.user = decoded.email;
        next();
      });
}