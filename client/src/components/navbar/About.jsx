import React from "react";
import photo from "../../assets/aresume.png";
import styled from "@emotion/styled";
import makeStyles from "@mui/styles/makeStyles";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Logo = styled("img")(() => ({
  width: "15rem",
  minWidth: "6rem",
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

function About() {
  const classes = useStyles();

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
            <Button variant="contained" size="large">About Us</Button>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={12}>
            <Item>
              <Typography variant="h2" sx={{ pl: 1, m: 2 }}>
                {" "}
                A+ Resume  is as easy as a resume builder gets. This builder asks the job seeker a series of multiple choice questions about education and experience, and only requires you to fill in the blanks with dates, roles, and other simple answers. We especially love the option to “Add Pre-Written Bullet Points” for creating customized job responsibilities, which we suggest using as ideas for your job responsibilities.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={8} md={12}>
            <Item>
              <Typography variant="h2" sx={{ pl: 1, m: 2 }}>
                {" "}
                When you reach the final step of the builder and you see the full layout of your resume, by clicking “save “ you can save it in your account.              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={8} md={12}>
            <Item>
              <Typography variant="h2" sx={{ pl: 1, m: 2 }}>
                {" "}
                A+ Resume lets you download your resume as a PDF, image form for free.</Typography>

            </Item>
          </Grid>
      </Grid>
    </Box>
  );
}

export default About;
