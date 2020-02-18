const express = require("express");
const cors = require("cors");
const timestampApi = require("./routes/api/Timestamp");

const app = express();

app.use(
  cors({
    optionsSuccessStatus: 200
  })
);

app.use("/api/timestamp", timestampApi);

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`> Server running on ${PORT}`);
});
