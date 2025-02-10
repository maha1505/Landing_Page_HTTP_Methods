import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Typography } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Navbar from "../components/Navbar";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/submissions");
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  const handleRowClick = (submission) => {
    setSelectedSubmission(submission);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSubmission(null);
  };

  const handleEdit = async () => {
    try {
      await fetch(`http://localhost:5000/api/submissions/${selectedSubmission.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedSubmission),
      });
      fetchSubmissions();
      handleClose();
    } catch (error) {
      console.error("Error updating submission:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:5000/api/submissions/${selectedSubmission.id}`, {
        method: "DELETE",
      });
      fetchSubmissions();
      handleClose();
    } catch (error) {
      console.error("Error deleting submission:", error);
    }
  };

  const handleChange = (e) => {
    setSelectedSubmission({ ...selectedSubmission, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f8ff" }}>
      <Navbar/>
      <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ color: "#0077B6", fontWeight: "bold" }}
        >
         Submissions
        </Typography>      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#007BFF" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Message</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id} onClick={() => handleRowClick(submission)} hover style={{ cursor: "pointer" }}>
                <TableCell>{submission.name}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.message}</TableCell>
                <TableCell>
                  <IconButton style={{ color: "green" }} onClick={(e) => { e.stopPropagation(); handleRowClick(submission); }}>
                    <Edit />
                  </IconButton>
                  <IconButton style={{ color: "red" }} onClick={(e) => { e.stopPropagation(); setSelectedSubmission(submission); handleDelete(); }}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Submission Details</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            value={selectedSubmission?.name || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            value={selectedSubmission?.email || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Message"
            name="message"
            value={selectedSubmission?.message || ""}
            onChange={handleChange}
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEdit} style={{ backgroundColor: "green", color: "white" }}>
            Save
          </Button>
          <Button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Submissions;