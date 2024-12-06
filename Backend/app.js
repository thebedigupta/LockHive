const express = require("express");
const path = require("path"); // Modification
const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Modification
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use(userRouter);

app.listen(3000, () => console.log("Server running on http://localhost:3000")); // Modification
