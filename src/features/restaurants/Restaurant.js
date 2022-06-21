import React from "react";
import { useDispatch } from "react-redux";
import { restaurantRemoved } from "./restaurantsSlice";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(restaurantRemoved(restaurant.id))
  }
  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={handleDelete}> Delete Restaurant </button>
        <ReviewsContainer restaurantId={restaurant.id} />
      </li>
    </div>
  );
}

export default Restaurant;
