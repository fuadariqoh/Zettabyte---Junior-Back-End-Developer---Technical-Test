let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");
const connectDatabase = require("./db");

let articlesRouter = require("./routes/articles");
let commentRouter = require("./routes/comments");

let app = express();

// connectDatabase();
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/articles", articlesRouter);
app.use("/comments", commentRouter);

module.exports = app;
