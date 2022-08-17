// Express Import
const express = require("express");
const app = express();
// Path Import
const path = require("path");
// Port
const port = process.env.port | 3200;

// Model
const Registration_Info = require("./database");
require("./db_connection.js");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/registration", (req, resp) => {
  resp.sendFile(path.join(__dirname, "registration_form.html"));
});

app.post("/registration", async (req, resp) => {
  try {
    const registration = new Registration_Info({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone: req.body.phone,
      class: req.body.class,
      address: req.body.address,
      gender: req.body.gender,
      state: req.body.state,
      city: req.body.city,
      DOB: req.body.DOB,
      pin: req.body.pin,
      course: req.body.course,
    });
    const register = await registration.save();
    resp.send("Student Registered SuccessfullY...");
  } catch {
    resp
      .status(401)
      .send("Student is Not Registered, Technical Error Occurs..");
  }
});

app.listen(port, () => {
  console.log(`Server is running on the port`, port);
});
