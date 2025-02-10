import React from "react";
import Navbar from "../components/Navbar";
import { Typography, Container, Box, Button, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Add a real image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 4,
        }}
      >
        <Fade in timeout={1000}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#0077B6", // Blue color
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Welcome to Our Academy
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: "#333", // Light black
                textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              Explore our courses, meet the faculty, and start your learning journey with us!
            </Typography>

            {/* Explore More Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0077B6",
                padding: "12px 30px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                borderRadius: "30px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#00B4D8",
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => navigate("/about")}
            >
              Explore More
            </Button>
          </Container>
        </Fade>
      </Box>
    </>
  );
};

export default Home;
