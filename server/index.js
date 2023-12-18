const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const cors = require("cors");

const Port = config.get("serverPort")
const app = express();

app.use(cors());
const noteRouter = require("./routes/note.routes");
const userRouter = require("./routes/user.routes");

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/note", noteRouter);

app.get("*", (req, res) => {
    res.send("Server started")
})

const start = async () => {
    try {
        mongoose.connect(config.get("dbUrl"));

        app.listen(Port, () => {
            console.log("Сервер запущен на порту:", Port)
        })
    }
    catch(e) {

    }
}

start();