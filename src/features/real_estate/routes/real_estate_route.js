// NPM Packages
import express from "express";
import { verifyToken } from "../../../jwt.js";
// Controller
import realEstateController from "../controllers/real_estate_controller.js";

const router = express.Router();

router.post("/real_estate", realEstateController.get);
router.post("/real_estate/:_id", realEstateController.getById);
router.post("/real_estate", verifyToken, realEstateController.create);
router.put("/real_estate", verifyToken, realEstateController.update);

export default router;
