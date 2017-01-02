'use strict';
import { ADD_TO_SHOPPING_CART, EMPTY_SHOPPING_CART, CHANGE_ITEM_QUANTITY } from '../actions/index';



export default function payloadSelect(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case EMPTY_SHOPPING_CART:
      return {};
    case ADD_TO_SHOPPING_CART:
      const toggleSelectedState = (payload) => Object.assign({}, payload.photo, payload.quantity, { selected: !payload.photo.selected });
      const toggledPhoto = toggleSelectedState(action.payload);


      const statePhotoKey = action.payload.photo['public_id']
      if (!state.hasOwnProperty(statePhotoKey)) {
        return Object.assign({}, state, { [statePhotoKey]: toggledPhoto });
      } else if (state.hasOwnProperty(statePhotoKey)) {
        let newState = Object.assign({}, state);
        delete newState[statePhotoKey];
        return newState;
      } else {
        return null;
      }
    default:
      return state;
  }
};
