import jwt from "jsonwebtoken";
import User from "../models/userModel";
import asyncHandler from "./asyncHandler";

// Check for user
export const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req.cookie.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorised, token failed...");
    }
  } else {
    res.status(401);
    throw new Error("No authorised, no token");
  }
});


// Check for the Admin 
export const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {

        next();
    } else {
        res.status(401).send("Not authorised as an Admin")
    }
}