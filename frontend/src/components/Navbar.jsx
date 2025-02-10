import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Contact", path: "/contact" },
    { label: "Submissions", path: "/submissions" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#0077B6" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer", "&:hover": { color: "#87CEEB" } }}>
            Academy
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" component={Link} to={item.path} sx={{ "&:hover": { backgroundColor: "#00B4D8" } }}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "block", md: "none" } }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.label} component={Link} to={item.path}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
