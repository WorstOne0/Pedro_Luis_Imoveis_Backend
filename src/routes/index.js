import express from "express";
const router = express.Router();

import version from "./version.js";
import authRoute from "./auth_route.js";
import realEstateRoute from "./real_estate_route.js";

// Routes
router.use(version);
router.use(authRoute);
router.use(realEstateRoute);

export default router;
