import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import card1 from "../../assets/card1.png";
import card3 from "../../assets/card3.jpg";
import card2 from "../../assets/card2.jpg";
import card4 from "../../assets/card4'.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/card6.png";

import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    padding: "0.1em",
    margin: "0 auto",

    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    height: 300
  

  },
});

const cards = [card1, card2, card3,card4,card5,card6];

export default function CardComp() {
  const classes = useStyles();

  return (
    <Grid  container spacing = {2} >
    {cards.map((card) => (
       <Grid item xs={12} sm={4}>
        <Card className={classes.root} variant="outlined">
          <CardMedia
            component="img"
            image={card}
            className={classes.img} sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />

          <CardActions>
            <Button size="large">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
    ))}
  </Grid>
  );
}
