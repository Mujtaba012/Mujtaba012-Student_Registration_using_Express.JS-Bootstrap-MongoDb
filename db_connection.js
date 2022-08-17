const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Student_Registration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Database Not Connected");
  });
