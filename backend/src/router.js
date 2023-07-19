const express = require("express");

const router = express.Router();

const cors = require("cors");

router.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./Middleware/auth");

// require des controllers

const itemControllers = require("./controllers/itemControllers");

const userControllers = require("./controllers/userControllers");

// route public

// items

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);

// user

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.destroy);

// login

router.post(
  "/login",
  userControllers.getUserByUsernameWithPasswordAndPassToNext,
  verifyPassword
);

// route veryf
router.use(verifyToken);

// route privé

router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);

router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
