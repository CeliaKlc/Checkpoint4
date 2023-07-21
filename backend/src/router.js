const express = require("express");

// Ajout de multer
const multer = require("multer");

const upload = multer({ dest: "./public/uploads/" });

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
  uploadRename,
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

router.use(verifyToken); // mur d'authentification

// multer
router.post(
  "/api/avatar",
  upload.single("avatar"),
  uploadRename,
  userControllers.image
);
router.post("/users", userControllers.add);
router.get("/users", userControllers.browse);
router.get("/user", userControllers.user);

router.post("/admins", hashPassword, userControllers.addAdmin);
module.exports = router;
