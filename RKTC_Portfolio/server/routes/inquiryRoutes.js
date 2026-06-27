const express = require('express');
const router = express.Router();
// this is like a mini-app
const Inquiry = require('../model/Inquiry');


router.post('/', async (req, res) => {
    try {
        const {
            name,
            phone,
            email,
            products,
            message
        } = req.body;

        //Validation
        if (!name || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing"
            });
        }

        const inquiry = await Inquiry.create({
            name,
            phone,
            email,
            message,
            products
        });

        res.status(201).json({
            success: true,
            message: "Inquiry submitted successfully",
            data: inquiry
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

router.get("/", async (req, res) => {
    try {

        const inquiries = await Inquiry.find();

        res.status(200).json({
            success: true,
            data: inquiries
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {

        const deletedInquiry = await Inquiry.findByIdAndDelete(
            req.params.id
        );

        if (!deletedInquiry) {
            return res.status(404).json({
                success: false,
                message: "Inquiry not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Inquiry deleted successfully",
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Server Error",
        });

    }
});

//UPDATE
router.put("/:id", async (req, res) => {
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


