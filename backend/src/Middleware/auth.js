const argon2 = require("argon2");

const jwt = require("jsonwebtoken");

const fs = require("fs");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2.verify(req.user.password, req.body.password).then((ok) => {
    if (ok) {
      const payload = {
        sub: req.user.id,
        admin: req.user.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token, admin: req.user.role });
    } else {
      res.sendStatus(401);
    }
  });
};

const verifyToken = (req, res, next) => {
  try {
    const authorization = req.get("Authorization");

    if (authorization == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization type is not 'Bearer'");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);

    res.sendStatus(401);
  }
};

const uploadRename = (req, res, next) => {
  const { fieldname, filename, mimetype, destination } = req.file;
  const newFileName = `${fieldname}-${req.payload.sub}`;
  const typeFile = mimetype.replace("image/", "");
  req.body.imgURL = `${destination.replace(
    "./public",
    ""
  )}${newFileName}.${typeFile}`;
  fs.rename(
    `${destination}${filename}`,
    `${destination}${newFileName}.${typeFile}`,
    (err) => {
      if (err) throw err;
      next();
    }
  );
};

module.exports = { hashPassword, verifyPassword, verifyToken, uploadRename };
