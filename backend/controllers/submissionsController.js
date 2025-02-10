const db = require("../db");

// Get all submissions
exports.getSubmissions = (req, res) => {
  db.query("SELECT * FROM submissions", (err, results) => {
    if (err) {
      console.error("Error fetching submissions:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(results);
  });
};

exports.createSubmission = (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log("Received:", req.body); // ✅ Log incoming data
  
    const sql = "INSERT INTO submissions (name, email, subject, message) VALUES (?, ?, ?, ?)"; // ✅ Added SQL
  
    db.query(sql, [name, email, subject, message], (err, result) => {
      if (err) {
        console.error("❌ Error inserting data:", err);  // ✅ Error logging
        return res.status(500).json({ error: "Database error" });
      }
      res.status(201).json({ message: "Submission created successfully" });
    });
  };
  

// Update a submission
exports.updateSubmission = (req, res) => {
  const { id } = req.params;
  const { name, email, subject, message } = req.body;
  
  const sql = "UPDATE submissions SET name = ?, email = ?, subject = ?, message = ? WHERE id = ?";
  
  db.query(sql, [name, email, subject, message, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Submission updated successfully" });
  });
};

// Delete a submission
exports.deleteSubmission = (req, res) => {
  const { id } = req.params;
  
  const sql = "DELETE FROM submissions WHERE id = ?";
  
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Submission deleted successfully" });
  });
};
