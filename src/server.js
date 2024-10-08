// .env config
import dotenv from "dotenv";
dotenv.config();

// NPM Packages
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// Routes
import router from "./routes/index.js";
// Models
import "./features/user/models/user.js";

// Database SUPER ADMIN
import initSuperAdmin from "./init.js";

// Create Server
const app = express();

app.use(cors());

// Serve Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

// Database Connect
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
});

// Add the super admin to the database
initSuperAdmin();

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server Started on port ${process.env.PORT}`);
});
