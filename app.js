const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors=require("cors");

const PORT = 4001;

const apiRouter = require("./routes/apis");

app.use(logger("dev"));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin: "*" }));




mongoose.connect("mongodb://localhost:27017/mongooseTest")
.then(res => console.log(`Mongoose connected to db successfully `))
.catch(err => console.log(`Mongoose connection to db failed `));

app.use("/auth",apiRouter);



app.listen(PORT, () => {
    console.log(`Server is connected at adreess ${PORT}`);
})
