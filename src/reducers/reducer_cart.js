import { ADD_PRODUCT, SHOW_CART, HIDE_CART } from '../actions/index';

const INITIAL_STATE = { show: false, items: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_PRODUCT:
      return Object.assign({}, state, {
        items: state.items.concat(action.payload)
      });
    case SHOW_CART:
      return Object.assign({}, state, {
        show: true
      });
    case HIDE_CART:
      return Object.assign({}, state, {
        show: false
      });
    default:
      return state;
  }
}