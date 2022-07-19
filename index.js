const express = require("express");
const bodyParser = require("body-parser");
const RegisterRoutes = require("./routes/register-routes");
const AdminRoutes = require("./routes/admin-routes");
const Announcements = require("./routes/announcement-routes");
const Popups = require("./routes/popup-routes");
const Login = require("./routes/login-routes");
const HttpError = require("./models/http-error");
var cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
// PORT
app.use("/register", RegisterRoutes);
app.use("/admin", AdminRoutes);
app.use("/announcement", Announcements);
app.use("/popup", Popups);
app.use("/admin/login", Login);
// if route not found
app.get("/", (req, res) => {
  res.json({ response: "Api's work Perfectly!" });
});
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  next(error);
});
//server error
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
// app.listen();
