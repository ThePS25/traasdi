import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Collapse,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "70%",
  margin: "20px auto",
  borderRadius: "8px",
  padding: "40px 20px 80px 20px",
  marginBottom: "50px",
});

const Header = styled("h2")({
  marginBottom: "20px",
  color: "#862B0D", // Brown color
  textAlign: "center",
  fontFamily: "Roboto, sans-serif", // Roboto font
});

const SectionButtonContainer = styled("div")({
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
});

const SectionButton = styled(Typography)({
  flex: "1",
  backgroundColor: "#186F65",
  fontFamily: "MerriweatherSans, sans-serif",
  color: "#FCE09B",
  textAlign: "center", // Add this line to center the text
  padding: "15px 15px 15px 15px ", // Add this line for padding
  // cursor: 'pointer',
  borderRadius: "8px",
});

const SectionCard = styled(Card)({
  margin: "10px",
  width: "100%",
  overflow: "auto",
  maxHeight: "300px",
  background: "#862B0D",
  color: "#FCE09B",
});

const StyledList = styled(List)({
  maxHeight: "150px",
  overflowY: "auto",
  fontFamily: "Roboto, sans-serif",
});

const ManualAnalysis = () => {
  const [openOverview, setOpenOverview] = useState(false);
  const [openImportance, setOpenImportance] = useState(false);
  const [openLiteratureReview, setOpenLiteratureReview] = useState(false);
  const [openCommonImpacts, setOpenCommonImpacts] = useState(false);
  const [openImpactOnChildren, setOpenImpactOnChildren] = useState(false);
  const [openImpactOnWomen, setOpenImpactOnWomen] = useState(false);
  const [openProposedWork, setOpenProposedWork] = useState(false);
  const [openConclusion, setOpenConclusion] = useState(false);
  const [openReferences, setOpenReferences] = useState(false);

  const handleToggle = (section) => {
    switch (section) {
      case "overview":
        setOpenOverview(!openOverview);
        break;
      case "importance":
        setOpenImportance(!openImportance);
        break;
      case "literatureReview":
        setOpenLiteratureReview(!openLiteratureReview);
        break;
      case "commonImpacts":
        setOpenCommonImpacts(!openCommonImpacts);
        break;
      case "impactOnChildren":
        setOpenImpactOnChildren(!openImpactOnChildren);
        break;
      case "impactOnWomen":
        setOpenImpactOnWomen(!openImpactOnWomen);
        break;
      case "proposedWork":
        setOpenProposedWork(!openProposedWork);
        break;
      case "conclusion":
        setOpenConclusion(!openConclusion);
        break;
      case "references":
        setOpenReferences(!openReferences);
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Container>
        <Header>
          Exploring the Psychological Impact of the Partition of the Indian
          Subcontinent through Narrative
        </Header>

        {/* Section Buttons */}
        <SectionButtonContainer>
          <SectionButton
            onClick={() => handleToggle("overview")}
            variant="contained"
          >
            Overview of Project
          </SectionButton>

          <SectionButton
            onClick={() => handleToggle("importance")}
            variant="contained"
          >
            Importance of our Project
          </SectionButton>

          <SectionButton
            onClick={() => handleToggle("literatureReview")}
            variant="contained"
          >
            Literature Review of Project
          </SectionButton>

          {/* <SectionButton onClick={() => handleToggle('commonImpacts')} variant="contained">
            Common Psychological Impacts
          </SectionButton>

          <SectionButton onClick={() => handleToggle('impactOnChildren')} variant="contained">
            Impact on Children
          </SectionButton>

          <SectionButton onClick={() => handleToggle('impactOnWomen')} variant="contained">
            Impact on Women
          </SectionButton> */}

          <SectionButton
            onClick={() => handleToggle("proposedWork")}
            variant="contained"
          >
            {"\n"}Proposed {"\n"} Work for Project
          </SectionButton>

          <SectionButton
            onClick={() => handleToggle("conclusion")}
            variant="contained"
          >
            {"\n"} Conclusion
          </SectionButton>

          <SectionButton
            onClick={() => handleToggle("references")}
            variant="contained"
          >
            {"\n"} References Used in Project
          </SectionButton>
        </SectionButtonContainer>

        {/* Overview Section Card */}
        <Collapse in={openOverview}>
          <SectionCard>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#B5CB99", fontWeight: "bold" }}
              >
                Overview:
              </Typography>
              <Typography>
                The Partition of the Indian subcontinent was a significant event
                in history, leading to the formation of India and Pakistan as
                two separate nations. This report delves into the psychological
                impact of the Partition through narratives. We examine the
                importance of studying this impact, present a literature review,
                explore common psychological impacts, and highlight the
                influence on children and women.
              </Typography>
            </CardContent>
          </SectionCard>
        </Collapse>

        {/* Importance Section Card */}
        <Collapse in={openImportance}>
          <SectionCard>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#B5CB99", fontWeight: "bold" }}
              >
                Importance of Exploring the Psychological Impact of Partition
                through Narratives:
              </Typography>
              <StyledList>
                <ListItem>
                  Understanding Trauma: The narratives of Partition survivors
                  help mental health professionals understand trauma's nature
                  and its impact on individuals and communities.
                </ListItem>
                <ListItem>
                  Promoting Empathy and Compassion: Sharing stories from
                  survivors promotes empathy and compassion, reducing stigma and
                  increasing awareness about mental health support for trauma
                  survivors.
                </ListItem>
                <ListItem>
                  Documenting History: Exploring the psychological impact helps
                  document the history of this significant event and preserve
                  the stories for future generations.
                </ListItem>
                <ListItem>
                  Fostering Healing: Mental health professionals can facilitate
                  healing between communities affected by the Partition by
                  exploring survivor narratives.
                </ListItem>
              </StyledList>
            </CardContent>
          </SectionCard>
        </Collapse>

        {/* Literature Review Section Card */}
        <Collapse in={openLiteratureReview}>
          <SectionCard>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#B5CB99", fontWeight: "bold" }}
              >
                Literature Review:
              </Typography>
              <Typography>
                The Partition led to massive violence, displacement, and trauma
                for millions. It has been studied across various disciplines.
                Key psychological impacts observed include loss of communal
                identity, coping, rebuilding identity, alienation, and looking
                to future generations for closure.
              </Typography>
            </CardContent>
          </SectionCard>
        </Collapse>

        {/* Common Psychological Impacts Section Card */}
        <Collapse in={openCommonImpacts}>
          <SectionCard>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#B5CB99", fontWeight: "bold" }}
              >
                Common Psychological Impacts Observed:
              </Typography>
              <Typography>
                Intergenerational Trauma: Traumatic effects passed from one
                generation to the next. Flashbulb Memories: Vivid memories of
                emotionally charged events. Internalizing Parental Trauma:
                Children internalizing parental trauma. Sense of Belongingness:
                Impact on survivors' sense of belonging. Desire to Return Home:
                A strong desire among survivors to return to their roots. Sense
                of Alienation: Disconnection from ancestral homes and
                communities. Identity Formation: Struggle to reconcile multiple
                identities.
              </Typography>
            </CardContent>
          </SectionCard>
        </Collapse>

        {/* Impact on Children Section Card */}
        <Collapse in={openImpactOnChildren}>
          <SectionCard>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#B5CB99", fontWeight: "bold" }}
              >
                Impact on Children:
              </Typography>
              <Typography>
                Examining how the Partition affected the development and
                well-being of children, challenges they faced, and long-term
                psychological effects.
              </Typography>
            </CardContent>
          </SectionCard>
        </Collapse>

        {/* Impact on Women Section Card */}
        <Collapse in={openImpactOnWomen}>
          <SectionCard>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#B5CB99", fontWeight: "bold" }}
              >
                Impact on Women:
              </Typography>
              <Typography>
                Understanding the disruption of women's social and economic
                roles, challenges they faced, and the need for gender-sensitive
                interventions.
              </Typography>
            </CardContent>
          </SectionCard>
        </Collapse>

        {/* Proposed Work Section Card */}
        <Collapse in={openProposedWork}>
          <SectionCard>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#B5CB99", fontWeight: "bold" }}
              >
                Proposed Work:
              </Typography>
              <StyledList>
                <ListItem>
                  Data Source: Oral and published interviews available on the
                  Partition Museum's website, Stanford Digital Repository, and
                  BBC channel.
                </ListItem>
                <ListItem>
                  Data Analysis: Identified common impacts and compared them to
                  psychological themes described in articles.
                </ListItem>
              </StyledList>
            </CardContent>
          </SectionCard>
        </Collapse>

        {/* Conclusion Section Card */}
        <Collapse in={openConclusion}>
          <SectionCard>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#B5CB99", fontWeight: "bold" }}
              >
                Conclusion:
              </Typography>
              <Typography>
                This study reveals the emotional experiences of Partition
                survivors, including a focus on collective experiences,
                mimicking of parental trauma, and a strong desire to return
                home. Mental health professionals can use this knowledge to
                promote dialogue, understanding, healing, and reconciliation.
              </Typography>
            </CardContent>
          </SectionCard>
        </Collapse>

        {/* References Section Card */}
        <Collapse in={openReferences}>
          <SectionCard>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "#B5CB99", fontWeight: "bold" }}
              >
                References:
              </Typography>
              <StyledList fontFamily="'Roboto', sans-serif">
                <ListItem>
                  Nandrajog, H. (2018). Refugees of the Partition of India:
                  Trauma and Strategies of Recovery.
                </ListItem>
                <ListItem>
                  Sage Books - The Psychological Impact of the Partition of
                  India.
                </ListItem>
                <ListItem>
                  Brown, R., & Kulik, J. (1977). Flashbulb Memories.
                </ListItem>
                <ListItem>Stanford University - Interviews.</ListItem>
                <ListItem>
                  Yusin, J. (2009). The Silence of Partition: Borders, Trauma,
                  and Partition History.
                </ListItem>
                <ListItem>
                  Werner, E. E. (2012). Children and War: Risk, Resilience, and
                  Recovery.
                </ListItem>
                <ListItem>
                  Menon, R., & Bhasin, K. (1998). Borders & Boundaries: Women in
                  India’s Partition.
                </ListItem>
              </StyledList>
            </CardContent>
          </SectionCard>
        </Collapse>
      </Container>
    </Layout>
  );
};

export default ManualAnalysis;
