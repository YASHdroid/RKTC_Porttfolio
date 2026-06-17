const express = require("express");
const router = express.Router();

const Admin = require("../model/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// CREATE ADMIN (only for setup/testing)
router.post("/create-admin", async (req, res) => {
try {


const { email, password } = req.body;

// Validation
if (!email || !password) {
  return res.status(400).json({
    message: "Email and password required",
  });
}

// Check existing admin
const existingAdmin =
  await Admin.findOne({
    email,
  });

if (existingAdmin) {
  return res.status(400).json({
    message: "Admin already exists",
  });
}

// Hash password
const hashedPassword =
  await bcrypt.hash(
    password,
    10
  );

// Create admin
const admin =
  await Admin.create({
    email,
    password: hashedPassword,
  });

return res.status(201).json({
  message: "Admin created successfully",
  adminId: admin._id,
});


} catch (err) {

console.log(err);

return res.status(500).json({
  message: "Server error",
});


}
});

// LOGIN
router.post("/login", async (req, res) => {
try {


const { email, password } =
  req.body;

// Validation
if (!email || !password) {
  return res.status(400).json({
    message:
      "Email and password required",
  });
}

// Find admin
const admin =
  await Admin.findOne({
    email,
  });

if (!admin) {
  return res.status(401).json({
    message:
      "Invalid credentials",
  });
}

// Compare password
const match =
  await bcrypt.compare(
    password,
    admin.password
  );

if (!match) {
  return res.status(401).json({
    message:
      "Invalid credentials",
  });
}

// Generate JWT
const token =
  jwt.sign(

    {
      id: admin._id,
    },

    process.env.JWT_SECRET,

    {
      expiresIn: "7d",
    }
  );

return res.status(200).json({
  message:
    "Login successful",

  token,
});


} catch (err) {


console.log(err);

return res.status(500).json({
  message:
    "Server error",
});


}
});

module.exports = router;
