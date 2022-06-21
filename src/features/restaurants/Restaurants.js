import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants }) {
  const restaurantLis = restaurants.map(r => (
    <Restaurant key={r.id} restaurant={r}/>
    ))
  return (
    <ul>
      {restaurantLis}
    </ul>
  );
}

export default Restaurants;
