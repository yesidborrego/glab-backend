const express = require("express");
const cors = require("cors")

const db = require("./db/configDb");
const routerAuth = require("./routes/auth");
const routerReservations = require("./routes/reservations");

(async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(error)
  }
})();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", routerAuth);
app.use("/reservations", routerReservations);

app.listen(PORT, () => {
  console.log("Server running");
});