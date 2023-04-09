import React from "react";
import { Grid, Box, Typography, Paper, Button } from "@mui/material";
import photo from "../assets/AResume.png";
import styled from "@emotion/styled";
import makeStyles from "@mui/styles/makeStyles";
import one from "../assets/one.png";
import three from "../assets/three.png";
import two from "../assets/two.png";
import CardComp from "./CardComp";
import { useNavigate } from "react-router-dom";

const Logo = styled("img")(() => ({
  width: "15rem",
  minWidth: "6rem",
}));

const Logos = styled("img")(() => ({
  width: "4rem",
  minWidth: "3rem",
  margin: 0,
}));


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#dee2e6" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



function BodyPart() {
  const classes = useStyles();
   const navigate = useNavigate();

   const navigateToResumes = () => {
    navigate('/resumes');   // navigate to /\resumes
  };

  
 

  return (
    <Box
      sx={{
        p: 2,
        m: 2,
        pl: 1,
        mt: 3,
        display: "flex",
        alignItems: "flex-start",
        flexGrow: 0.5,
      }}
    >
      <Grid
        container
        spacing={4}
        border={"none"}
        className={classes.gridContainer}
      >
        <Grid item xs={5} sm={6} md={6}>
          <Item>
            <Logo src={photo} />
          </Item>
        </Grid>
        <Grid item xs={9} sm={6} md={6}>
          <Item>
            <Typography variant="h1"> A+ Resume Builder </Typography>
            <Typography variant="h2" sx={{ m: 2 }}>
              Professional Resume For Any Job
            </Typography>
            <Typography variant="p" sx={{ m: 2 }}>
              A resume builder is an online resume-building tool that provides
              different resume templates to which you can add your information.
              The builder then uses this information to develop a resume that
              you can save and use to apply for jobs.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={12}>
          <Item>
            <Button
              variant="contained"
              onClick={navigateToResumes}
              disableElevation
              size="large"
              
            >
              Create Your Resume
            </Button>
          </Item>
        </Grid>
        <Grid sx={{ mt: 2 }}>
          <CardComp />
        </Grid>
        <Grid item xs={12} sm={8} md={12}>
          <Item>
            <Button
              variant="contained"
              size="large"
              onClick={navigateToResumes}
              disableElevation
            >
              More
            </Button>
          </Item>
        </Grid>
        <Box
          sx={{
            p: 1,
            m: 2,
            mt: 2,
            display: "flex",
          }}
        >
          <Grid item xs={8} sm={4} md={5}>
            <Item>
              <Logo src={photo} />
            </Item>
          </Grid>

          <Grid item xs={9} sm={6} md={9}>
            <Item>
              <Typography variant="p2" sx={{ pl: 1, m: 2 }}>
                {" "}
                Keep on beginning and failing. Each time you fail, start all
                over again, and you will grow stronger until you have
                accomplished a purpose—not the one you began with perhaps, but
                one you'll be glad to remember{" "}
              </Typography>
            </Item>
          </Grid>
        </Box>
        <Grid item xs={12} sm={12} md={12}>
          <Item>
            <Typography variant="h1"> How It Works </Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={2} md={3}>
          <Item>
            <Logos src={one} />
          </Item>
        </Grid>
        <Grid item xs={6} sm={2} md={3}>
          <Item>
            <Typography variant="p3" sx={{ m: 2, ml: 1 }}>
              {" "}
              Choose the template as per your requirement{" "}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={2} md={3}>
          <Item>
            <Logos src={two} />
          </Item>
        </Grid>
        <Grid item xs={6} sm={2} md={3}>
          <Item>
            <Typography variant="p3" sx={{ m: 2, ml: 1 }}>
              {" "}
              Fill the blanks with your personal details in resume{" "}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2} md={3}>
          <Item>
            <Logos src={three} />
          </Item>
        </Grid>
        <Grid item xs={3} sm={1} md={3}>
          <Item>
            <Typography variant="p3" sx={{ m: 2, ml: 1 }}>
              Download the copy of resume{" "}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BodyPart;
