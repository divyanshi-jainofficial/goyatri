require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Inquiry = require("./models/Inquiry");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("GoYatri API Running");
});

app.post("/api/inquiry", async (req, res) => {

    try {

        const inquiry = new Inquiry(req.body);

        await inquiry.save();

        res.status(201).json({
            success: true,
            message: "Inquiry Saved Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

app.get("/api/inquiries", async (req, res) => {

    try {

        const inquiries = await Inquiry.find();

        res.json(inquiries);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

app.delete("/api/inquiries/:id", async (req, res) => {

    try {

        await Inquiry.findByIdAndDelete(req.params.id);

        res.json({
            message: "Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

app.delete("/api/inquiries/:id", async (req, res) => {

    try {

        await Inquiry.findByIdAndDelete(req.params.id);

        res.json({
            message: "Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
