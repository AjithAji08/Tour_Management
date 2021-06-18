const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const usersRoute = require("./routes/users");
const signupRoute = require("./routes/signup");
const guestRoute = require("./routes/guest");
const viewRoute = require("./routes/view");
const authRoute = require("./routes/auth");

app.use("/users", usersRoute);
app.use("/signup", signupRoute);
app.use("/guest", guestRoute);
app.use("/view", viewRoute);
app.use("/auth", authRoute);


mongoose
  .connect(
    "mongodb+srv://root:bunny@cluster0-alh36.gcp.mongodb.net/Tourism?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log("Server Started on port ", port);
});
