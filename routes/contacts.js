const express = require("express");
const router = express.Router();

// @route   Get api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("GEt all contacts");
});

// @route   POST api/contacts
// @desc    Add new users contacts
// @access  Private
router.post("/", (req, res) => {
  res.send("Add new contacts");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   POST api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete contacts");
});

module.exports = router;
