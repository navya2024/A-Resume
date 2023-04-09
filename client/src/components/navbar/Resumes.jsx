import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import photo1 from "../../assets/photo1.png";
import styled from "@emotion/styled";
import makeStyles from "@mui/styles/makeStyles";
import CardComp from "./CardComp";

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

const Resumes = () => {
  const classes = useStyles();

  return (
    <>
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
              <Logo src={photo1} />
            </Item>
          </Grid>
          <Grid item xs={9} sm={6} md={6}>
            <Item>
              <Typography variant="h1"> A+ Resume </Typography>
              <Typography variant="h2" sx={{ m: 2 }}>
                Choose a job you love, and you will never have to work a day in
                your life."
              </Typography>
            </Item>
          </Grid>

          <Grid item xs={12} sm={8} md={12}>
            <Item>
              <Typography sx={{ fontSize: 35 }}>
                {" "}
                Some Free Templates{" "}
              </Typography>
            </Item>
          </Grid>
          <Grid sx={{ mt: 2 }}>
          <CardComp />
        </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Resumes;
