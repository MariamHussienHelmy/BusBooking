// ==================== INITIALIZE EXPRESS APP ====================
const express = require("express"); //express عشان نقوم على السيرفر كله
const app = express(); //call to express

// ====================  GLOBAL MIDDLEWARE ====================
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // TO ACCESS URL FORM ENCODED ==> based on bofy parser to be jason
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors()); // ALLOW HTTP REQUESTS LOCAL HOSTS

// ====================  Required Module ====================
const auth = require("./routes/Auth");
const appointments = require("./routes/Appointments");
const request = require("./routes/Request");
const travelers = require("./routes/Traveler");
// ====================  RUN THE APP  ====================
app.listen(4000, "localhost", () => {
  console.log("SERVER IS RUNNING ");
});

// ====================  API ROUTES [ ENDPOINTS ]  ====================
app.use("/auth", auth);
app.use("/appointments", appointments);
app.use("/traveler",travelers);
app.use("/request", request);
