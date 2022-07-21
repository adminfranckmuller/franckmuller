const mongoose = require("mongoose");
// "mongodb+srv://ditechabdul:ditechabdul@frunckmuller.ugjjj.mongodb.net/frunckmuller";
var uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.dy7ud.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected Successfuly");
  })
  .catch((err) => {
    console.log(err, "COnnection Failed");
  });
