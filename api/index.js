const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors())

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from my API!" });
});

app.get("/", (req, res) => {
    res.send({
        users:[
            {
                id:1,
                name: "nurbol",
                password: "nigger2020"
            },
            {
                id:2,
                name: "nurbol",
                password: "nigger2020"
            },
            {
                id:3,
                name: "nurbol",
                password: "nigger2020"
            },
            {
                id:4,
                name: "nurbol",
                password: "nigger2020"
            }
        ]
    });
});


app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
