const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const postsRoute = require("./routers/posts");
const cors = require("cors");

const PORT = 5050;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
