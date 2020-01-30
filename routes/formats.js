const express = require("express");
const router = express.Router();

const Format = require("../models/format");

// @route   GET api/formats/test
// @desc    Tests formats route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Formats Works" }));

// @route   GET api/formats/create
// @desc    Post a format
// @access  Public
router.post("/create", (req, res) => {
  const data = { ...req.body };
  console.log(data);

  Format.findOne({ league_id: data.league_id })
    .then(format => {
      if (format) {
        return {
          error:
            "There is already a format created for this league. You can edit the current format or delete it to start over."
        };
      } else {
        const newFormat = new Format({ ...data });
        console.log("Works");
        newFormat
          .save()
          .then(created => {
            console.log("This worked");
            res.json(created);
          })
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
