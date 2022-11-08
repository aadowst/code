import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getOneHotel,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/find/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/find/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getOneHotel);

// GET ALL
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
