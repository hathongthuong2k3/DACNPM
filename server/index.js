const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const cors = require("cors");
const path = require("path");
var cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3000;
app.use(
  cors({
    methods: ["get", "post", "put", "DELETE", "PATCH"],
    credentials: true,
  })
);
const db = require("./src/config/database");
// HTTP logger
app.use(morgan("dev"));
app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100000,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(limiter);
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const route = require("./routes");
const logRequestTime = require("./src/middleware/logRequestTime");
const logRequestMethod = require("./src/middleware/logRequestMethod");
app.use(logRequestTime);
app.use(logRequestMethod);
//Route init
route(app);

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
module.exports = app;
