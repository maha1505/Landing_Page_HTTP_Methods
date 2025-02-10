import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript, and React.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E",
  },
  {
    id: 2,
    title: "Data Science",
    description: "Learn Python, Machine Learning, and AI fundamentals.",
    image: "https://www.oxfordinstitute.in/img/data-science-course.jpg",
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Explore Photoshop, Illustrator, and creative design techniques.",
    image: "https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/01/main-qimg-5be34fc0ecb0e637e341ce101ff7c6cf-lq.jpg",
  },
];

const Courses = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 4, backgroundColor: "#E0F7FA", minHeight: "100vh" }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ color: "#0077B6", fontWeight: "bold" }}
        >
          Our Courses
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                  sx={{ transition: "transform 0.3s", "&:hover": { transform: "scale(1.1)" } }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#0077B6", fontWeight: "bold" }}
                  >
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#87CEEB",
                      transition: "background-color 0.3s, transform 0.3s",
                      "&:hover": {
                        backgroundColor: "#00B4D8",
                        transform: "scale(1.05)",
                      },
                    }}
                    fullWidth
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Courses;
