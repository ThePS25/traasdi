// Impact.js
import React from "react";
import { impactList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../styles/Impact.css"; // Import the CSS file for Impact

const Impact = () => {
  return (
    <Layout>
      <Box className="impact-container">
        {impactList.map((impact, index) => (
          <Card key={index} className="impact-card">
            <CardActionArea>
              <CardMedia
                className="impact-image"
                component="img"
                height="150"
                image={impact.image}
                alt={impact.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="impact-name"
                >
                  {impact.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="impact-description"
                >
                  {impact.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <div style={{ height: "100px" }} className="extra-space"></div>
    </Layout>
  );
};

export default Impact;
