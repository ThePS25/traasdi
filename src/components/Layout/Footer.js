import React from "react";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
// import LeetcodeIcon from "@mui/icons-material/LeetcodeIcon";
import { Box, Typography } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center",
        bgcolor: "#862B0D", //#B2533E
        color: "#B5CB99", // Change this value to the desired text color
        p: 1, // Adjust this value to decrease the height
      }}
    >
      <Box
        sx={{
          my: 0.5, // Adjust this value to decrease the height
          "& svg": {
            fontSize: "40px", // Adjust this value to decrease the icon size
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "#FCE09B",
            transform: "translateX(5px)",
            transition: "all 400ms",
          },
        }}
      >
        {/* icons */}
        <LinkedIn />
        <InstagramIcon />
        <GitHubIcon />
        <EmailIcon />
      </Box>
      <Typography
        variant="h6"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "0.8rem", // Adjust this value to decrease the font size
            color: "#FCE09B", // Change this value to the desired text  color
          },
        }}
      >
        All Rights Reserved &copy; Bhavika Maharshi and Pratyush Srivastava
      </Typography>
    </Box>
  );
};

export default Footer;
