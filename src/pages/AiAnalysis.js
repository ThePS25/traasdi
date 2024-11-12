// AiAnalysis.js
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Typography,
  Box,
  ButtonGroup,
  Button,
  LinearProgress,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import "../styles/AiAnalysis.css";

const AiAnalysis = () => {
  const [selectedGender, setSelectedGender] = useState("Female");

  // Sentiment analysis results
  const sentiments = {
    Female: { Sad: 40, Angry: 0, Surprise: 18, Fear: 137 },
    Male: { Sad: 8, Angry: 0, Surprise: 18, Fear: 68 },
  };

  const emotionalImpacts = [
    {
      title: "Sadness",
      description: `Narrative indicates a significantly higher mention of sadness in females(40) compared to males(8). This suggests that 
      females expressed a greater degree of sadness in response to the Partition.`,
    },
    {
      title: "Anger",
      description: `Both ${
        selectedGender === "Female" ? "females" : "males"
      } and ${
        selectedGender === "Female" ? "males" : "females"
      } had no mentions of anger, indicating that anger was not a prominent emotion in their accounts.`,
    },
    {
      title: "Surprise",
      description: `The equal number of mentions of surprise (18) for both ${
        selectedGender === "Female" ? "females" : "males"
      } and ${
        selectedGender === "Female" ? "males" : "females"
      } suggests that both genders were equally surprised by the events surrounding the Partition.`,
    },
    {
      title: "Fear",
      description: `Narrative displays a notably higher frequency of fear in females(137)  compared to males(68). This implies that females
       expressed a greater degree of fear and anxiety, possibly due to the uncertain and volatile circumstances during the Partition.`,
    },
  ];
  
  

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const renderSentimentResults = () => {
    return (
      <div className="sentimentContainer">
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontFamily: ["Merriweather Sans", "sans-serif"],
          }}
        >{`${selectedGender}'s Sentiments:`}</Typography>
        <Box>
          {Object.entries(sentiments[selectedGender]).map(
            ([emotion, count]) => (
              <Box key={emotion} sx={{ marginBottom: 2 }}>
                <Typography
                  variant="h6"
                  fsx={{
                    textAlign: "center",
                    fontFamily: ["Roboto", "sans-serif"],
                  }}
                >{`${emotion}: ${count} mentions`}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={(count / 200) * 100}
                  sx={{
                    marginTop: 1,
                    "&.MuiLinearProgress-root": {
                      backgroundColor: "rgba(24, 111, 101, 0.3)", // Color for the unfilled portion
                    },
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#186F65", // Color for the filled portion
                    },
                  }}
                />
              </Box>
            )
          )}
        </Box>
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <div className="container">
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontFamily: ["Merriweather Sans", "sans-serif"],
            color: "#862B0D",
          }}
        >
          Sentiment Analysis of Partition Survivor Interviews: A Gender-Based
          Perspective
        </Typography>

        <Box sx={{ marginBottom: 2, textAlign: "center" }}>
          {/* <Typography variant="body1" >Select Gender:</Typography> */}
          <ButtonGroup
            marginTop="20px"
            color="primary"
            aria-label="gender selection"
          >
            <Button
              variant={selectedGender === "Female" ? "contained" : "outlined"}
              onClick={() => handleGenderChange("Female")}
              sx={{
                backgroundColor:
                  selectedGender === "Female" ? "#862B0D" : "inherit",
                color: selectedGender === "Female" ? "#FFF" : "inherit",
                "&:hover": {
                  backgroundColor:
                    selectedGender === "Female" ? "#862B0D" : "inherit",
                },
              }}
            >
              Female
            </Button>
            <Button
              variant={selectedGender === "Male" ? "contained" : "outlined"}
              onClick={() => handleGenderChange("Male")}
              sx={{
                backgroundColor:
                  selectedGender === "Male" ? "#862B0D" : "inherit",
                color: selectedGender === "Male" ? "#FFF" : "inherit",
                "&:hover": {
                  backgroundColor:
                    selectedGender === "Male" ? "#862B0D" : "inherit",
                },
              }}
            >
              Male
            </Button>
          </ButtonGroup>
        </Box>

        {renderSentimentResults()}

        <Slider {...sliderSettings} className="cardContainer">
          {emotionalImpacts.map((impact, index) => (
            <Box key={index} className="card">
              <Typography className="cardHeader" variant="h4">
                {impact.title}
              </Typography>
              <Typography className="cardText" variant="body1">
                {impact.description}
              </Typography>
            </Box>
          ))}
        </Slider>
      </div>
    </Layout>
  );
};

export default AiAnalysis;
