import express from "express"
import { editProfile, getCurrentUser } from "../controllers/user.controllers.js";
import isAuth from "../middlewares/isAuth.js";
import { upload } from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.get("/current", isAuth, getCurrentUser);
console.log("User router initialized");
userRouter.post("/profile", isAuth, upload.single("image"), editProfile);

export default userRouter;
