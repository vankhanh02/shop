import React from "react";
import "./ExploreCollection.css";
import explore from "../Assets/Explore/explore-collection.js";
import ExploreCard from "../ExploreCard/ExploreCard.jsx";
const ExploreCollection = () => {
  return (
    <div className="explore-collection">
      <div className="explore-collection-content">
        {explore.map((item, i) => {
          return (
            <ExploreCard
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreCollection;
