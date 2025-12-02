import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// password saving
import bcrypt from "bcryptjs";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  //   check that user fill all nesscarry requirements
  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs.");
  }

  //   check user exist
  const userExists = await User.findOne({ email });
  if (userExists) res.status(400).send("User Already exists");

  //   bcryption
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // new user created
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

export default createUser;
