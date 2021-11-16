import React from "react";
import react from "react";
import Card from "./Card";
import "./Cards.css";
import Image from "./img_avatar.png";

function Cards() {
  return (
    <div className="cards">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;