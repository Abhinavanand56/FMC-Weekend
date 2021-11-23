import React from "react";
import react from "react";
import Card from "./Card";
import Image from "./img_avatar.png";
import classes from "./Cards.module.css";

function Cards() {
  return (
    <div className={classes.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
