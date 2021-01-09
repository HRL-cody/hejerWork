import React, { useState } from "react";
import { Input } from "antd";
import StarRatingComponent from "react-star-rating-component";
const { Search } = Input;
function Filter({ title, rate, setRate }) {
  const onStarClick = (nextValue) => {
    setRate(nextValue);
  };

  return (
    <div className="d-flex flex-row bd-highlight mb-3">
      <Search
        style={{ margin: "1rem", maxWidth: "60rem" }}
        placeholder="search a movie"
        allowClear
        onChange={(e) => title(e.target.value)}
        size="large"
      />
      <div className="mt-3">
        {" "}
        <div>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={rate}
            emptyStarColor={"white"}
            onStarClick={onStarClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
