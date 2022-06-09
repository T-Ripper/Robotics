import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, b) => {
        return (
          <Card
            key={b}
            id={robots[b].id}
            name={robots[b].name}
            email={robots[b].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
