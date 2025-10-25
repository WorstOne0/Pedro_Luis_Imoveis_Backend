// NPM Packages
import express from "express";
import multer from "multer";
import { verifyToken, realEstateUpload } from "../../../middlewares/index.js";
// Controller
import realEstateController from "../controllers/real_estate_controller.js";

const router = express.Router();
const tempMulter = multer({ storage: multer.memoryStorage() });

router.post("/real_estate", realEstateController.get);
router.post("/real_estate/:_id", realEstateController.getById);
router.post("/real_estate", verifyToken, tempMulter.array("images", 10), realEstateUpload, realEstateController.create);
router.put("/real_estate", verifyToken, tempMulter.array("images", 10), realEstateUpload, realEstateController.update);

export default router;
