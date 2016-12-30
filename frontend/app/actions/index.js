import axios from 'axios';


export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART';
export const TOGGLE_PHOTO_SELECTION_STATE = 'TOGGLE_PHOTO_SELECTION_STATE';

export const GET_IMAGE_OBJECT = 'GET_IMAGE_OBJECT';

export const SUBMIT_ORDER = 'SUBMIT_ORDER';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';

export const getPhotos = () => {
  const request = axios.get('/images');

  return request.then((data) => {
    return {
      type: GET_IMAGE_OBJECT,
      payload: data.data
    };
  });
};

export const submitOrder = (order, phone, email) => {
  const request = axios.post('/order', {
      order, phone, email
    })
    .then(function(response) {
      console.log('response received');
    })
    .catch(function(error) {
      console.log(error);
    });
  return {
    type: SUBMIT_ORDER,
    payload: order
  };
};

export const addToShoppingCart = (photo) => ({
  type: ADD_TO_SHOPPING_CART,
  payload: photo
});

export const changeItemQuantity = (item) => ({
  type: CHANGE_ITEM_QUANTITY,
  payload: item
});

export const toggleGalleryPhotoSelection = (photo) => ({
  type: TOGGLE_PHOTO_SELECTION_STATE,
  photo
});
