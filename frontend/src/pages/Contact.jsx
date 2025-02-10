import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/api/submissions", formData);
      console.log("Submitting:", formData);

      alert("✅ Submission successful!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("❌ Failed to submit. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ padding: 4, backgroundColor: "#E0F7FA", minHeight: "100vh" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#0077B6", fontWeight: "bold", mb: 4 }}
        >
          Contact Us
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Paper
              elevation={4}
              sx={{
                padding: 4,
                borderRadius: 2,
                backgroundColor: "#FFFFFF",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  type="email"
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                  required
                />
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    backgroundColor: "#87CEEB",
                    transition: "background-color 0.3s, transform 0.3s",
                    "&:hover": {
                      backgroundColor: "#00B4D8",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;