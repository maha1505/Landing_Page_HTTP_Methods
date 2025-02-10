const express = require("express");
const router = express.Router();
const { getSubmissions, createSubmission, updateSubmission, deleteSubmission } = require("../controllers/submissionsController");

router.get("/", getSubmissions);

router.post("/", createSubmission);

router.put("/:id", updateSubmission);

router.delete("/:id", deleteSubmission);

module.exports = router;
