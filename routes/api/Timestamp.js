const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const date_string = req.params.date_string;
  const newDate = new Date();
  res.json({ unix: newDate.getTime(), utc: newDate.toUTCString() });
});

const checkAndReturnDate = date_str => {
  if (date_str.includes("-")) {
    return new Date(date_str);
  } else {
    return new Date(parseInt(date_str));
  }
};

router.get("/:date_string", (req, res) => {
  const date_string = req.params.date_string;
  const newDate = checkAndReturnDate(date_string);
  res.json({ unix: newDate.getTime(), utc: newDate.toUTCString() });
});

module.exports = router;
