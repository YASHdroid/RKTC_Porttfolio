const express = require("express");
const router = express.Router();

const Product = require("../model/Product");

//ADD PRODUCT
router.post("/", async (req, res) => {
    try {

        const {
            name,
            description,
            category,
            image
        } = req.body;

        if (!name || !description || !category || !image) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const product = await Product.create({
            name,
            description,
            category,
            image
        });

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: product
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }
});

//ALL PRODUCTS
router.get("/", async (req, res) => {
    try {

        const products = await Product.find();

        res.status(200).json({
            success: true,
            data: products
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }
});