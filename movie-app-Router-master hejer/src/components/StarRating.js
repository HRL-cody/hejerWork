import React from "react";

const StarRating = ({ rate, addStar }) => {
  const startab = [];
  for (let i = 1; i <= 5; i++) {
    i <= rate
      ? startab.push(
          <span
            key={i}
            style={{ color: "orange", fontSize: "17px" }}
            onClick={() => addStar(i)}
          >
            {" "}
            ★{" "}
          </span>
        )
      : startab.push(
          <span
            key={i}
            style={{ color: "black", fontSize: "17px" }}
            onClick={() => addStar(i)}
          >
            {" "}
            ★{" "}
          </span>
        );
  }

  return <div>{startab}</div>;
};

export default StarRating;
