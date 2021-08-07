import { combineReducers } from 'redux';
import OrderStatusReducer from './orderStatusReducer';
import GetWishlistDataReducer from './getWishlistDataReducer';

const RootReducer = combineReducers ({
   orderStatusReducer: OrderStatusReducer,
   getWishlistDataReducer: GetWishlistDataReducer
});
export default RootReducer;