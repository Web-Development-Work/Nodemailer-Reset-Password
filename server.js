require("dotenv").config();
const connection = require("./db");
const express = require("express");
const app = express();
const users = require("./routes/user");
const passwordReset = require("./routes/passwordReset")
connection();

app.use(express.json());

app.use("/api/users",users);
app.use("/api/password-reset",passwordReset);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is working on port ${port}...`));