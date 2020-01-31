import React from "react";
import Card from "./card";
import CardLinesIndecator from "./CardLines";
export default function CardView(props) {
  return (
    <div
      className="cursor-pointer col-sm-3"
      onClick={() => props.showCardDetails(props.value)}
    >
      <Card
        heading={props.heading}
        title={props.title}
        description={props.description}
        color={props.color}
      />
      <CardLinesIndecator color={props.color} />
    </div>
  );
}
