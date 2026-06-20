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