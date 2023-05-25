import React from "react";
import fullStar from "../assets/img/fullStar.png";
import emptyStar from "../assets/img/emptyStar.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={fullStar}
            alt="etoile rouge"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={emptyStar}
            alt="etoile grise"
          />
        )
      )}
    </div>
  );
};

export default Rating;
