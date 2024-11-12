import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", display: mobileOpen ? "block" : "none" }}
      bgcolor="#186F65"
      flexDirection="column"
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <img
            src="/Images/TrasdiLogo.png"
            alt="Your Site Logo"
            style={{ height: 70, padding: "11.5px" }}
          />
        </Link>

        <Divider />

        <ul
          className="mobile-navigation-menu"
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/impact"}>Impact</Link>
          </li>
          <li>
            <Link to={"/manualanalysis"}>Manual Analysis</Link>
          </li>
          <li>
            <Link to={"/aianalysis"}>AI Analysis</Link>
          </li>
        </ul>
      </Box>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#186F65" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link to="/">
                <img
                  src="/Images/TrasdiLogo.png"
                  alt="Your Site Logo"
                  style={{ height: 70, padding: "11.5px" }}
                />
              </Link>
            </Box>

            <Box>
              <ul
                className="navigation-menu"
                style={{ listStyleType: "none", display: "flex", gap: "20px" }}
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/impact"}>Impact</Link>
                </li>
                <li>
                  <Link to={"/manualanalysis"}>Manual Analysis</Link>
                </li>
                <li>
                  <Link to={"/aianalysis"}>AI Analysis</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "&.MuiDrawer-paper": { boxSizing: "border-box", width: "240 px" },
            }}
          >
            {drawer}
          </Drawer>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
