const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
// this is like a mini-app
const Inquiry = require('../model/Inquiry');

const sendEmail = require("../utils/sendEmail");

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

        await sendEmail(inquiry);
        res.status(201).json({
            success: true,
            message: "Inquiry submitted successfully",
            data: inquiry
        });


    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

router.get("/"  , auth , async (req, res) => {
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

router.delete("/:id" ,  auth , async (req, res) => {
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

module.exports = router;


