const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Product = require("../model/Product");

//ADD PRODUCT
router.post("/" , auth, async (req, res) => {
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

//DELETE
router.delete("/:id" , auth, async (req, res) => {
    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }
});

//UPDATE
router.put("/:id" , auth , async (req, res) => {
    try {

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Server Error",
        });

    }
});


module.exports = router;