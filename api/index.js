const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from my public API!" });
});

app.get("/", (req, res) => {
    res.json({
        users: [
            { id: 1, name: "Nurbol", password: "12345" },
            { id: 2, name: "Aibek", password: "qwerty" },
            { id: 3, name: "Asel", password: "test123" },
            { id: 4, name: "Dana", password: "pass123" },
        ],
    });
});

module.exports = app;
