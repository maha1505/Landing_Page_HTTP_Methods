import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Grid, Card, CardContent, Avatar, Fade } from "@mui/material";

// Team Member Data
const team = [
  { name: "John Doe", role: "Founder & CEO", image: "https://thumbs.dreamstime.com/b/cartoon-illustration-businessman-character-wearing-suit-tie-blank-id-card-businessman-character-wearing-suit-340323158.jpg" },
  { name: "Jane Smith", role: "Head of Academics", image: "https://thumbs.dreamstime.com/b/cartoon-illustration-businessman-character-wearing-suit-tie-blank-id-card-businessman-character-wearing-suit-340323158.jpg" },
  { name: "Michael Lee", role: "Lead Developer", image: "https://thumbs.dreamstime.com/b/cartoon-illustration-businessman-character-wearing-suit-tie-blank-id-card-businessman-character-wearing-suit-340323158.jpg" },
];

const About = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 4, backgroundColor: "#E0F7FA", minHeight: "100vh" }}>
        {/* Introduction Section */}
        <Fade in timeout={1000}>
          <Box textAlign="center" sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ color: "#0077B6", fontWeight: "bold" }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, maxWidth: "700px", mx: "auto" }}>
              Welcome to our academy, where learning meets innovation. Our mission is to provide
              high-quality education, fostering creativity, critical thinking, and technical skills.
            </Typography>
          </Box>
        </Fade>

        {/* Mission and Vision Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: "#87CEEB",
                color: "white",
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Our Mission
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  To empower students with knowledge and skills that prepare them for the future.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: "#00B4D8",
                color: "white",
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Our Vision
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  To be a global leader in education, inspiring students to achieve their dreams.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Team Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" align="center" sx={{ color: "#0077B6", fontWeight: "bold" }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 2,
                    boxShadow: 3,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: "#0077B6", fontWeight: "bold" }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default About;
