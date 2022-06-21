import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
  },
  reducers: {
    restaurantAdded(state, action) {
      console.log(action.payload)
      state.entities.push({
        id: uuid,
        name: action.payload,
      });
    },
    restaurantRemoved(state, action) {
      const xRest = state.entities.findIndex(r => r.id === action.payload);
      state.entities.splice(xRest, 1);
    }
  },
});

export const { restaurantAdded, restaurantRemoved } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
