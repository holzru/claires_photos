'use strict';
import { combineReducers } from 'redux';

import shoppingCart from './shoppingCart_Reducer';
import imageObject from './image_object_reducer';
import orderSubmission from './orderSubmission_Reducer';


const rootReducer = combineReducers({
  shoppingCart,
  imageObject,
  orderSubmission
});

export default rootReducer;
