'use strict';
import { ADD_TO_SHOPPING_CART, EMPTY_SHOPPING_CART } from '../actions/index';


const toggleSelectedState = (photo) => Object.assign({}, photo, { selected: !photo.selected });

export default function payloadSelect(state = {}, action) {
  switch (action.type) {
    case EMPTY_SHOPPING_CART:
      // console.log(`Action <${action.type}> registered with empty payload`);
      return {};
    case ADD_TO_SHOPPING_CART:
      // console.log(`Action <${action.type}> registered with payload <payload: `, action.payload, '>');
      const statePhotoKey = action.payload['public_id']
      const toggledPhoto = toggleSelectedState(action.payload);

      //NOTE RIGHT NOW: the observed behavior is that one click adds, and another removes.
      //Thats probably what this if-else statement does..
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
