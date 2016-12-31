'use strict';
import { SUBMIT_ORDER } from '../actions/index';


export default function orderSubmission(state = {}, action) {
  switch (action.type) {
    case SUBMIT_ORDER:
      console.log('ACTION FROM REDUCER');
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};
