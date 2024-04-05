import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { countyByCity, countyByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post('/',verifyAdmin,createHotel);
//UPDATE
router.put('/:id',verifyAdmin,updateHotel);
//DELETE
router.delete('/:id',verifyAdmin,deleteHotel)
//GET
router.get('/find/:id',getHotel)
//GET ALL
router.get('/',getHotels)
router.get('/countByCity',countyByCity)
router.get('/countByType',countyByType)

export default router;
