import express from "express";
import {
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all accounts");
});

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", 
// verifyUser, 
deleteUser);

// GET
router.get("/:id", verifyUser, getOneUser);

// GET ALL
router.get(
  "/",
  // commented out verifyAdmin because issue with storing cookies, despite being logged in.
  // verifyAdmin,
  getAllUsers
);

export default router;
