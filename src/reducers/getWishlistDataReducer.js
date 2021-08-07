import { types } from '../constants/appConstant';
export default function (state = {}, action) {
   switch(action.type) {
      case types.GET_WISHLIST_ITEMS:
         return { ...state, wishlistData: action.payload.wishlistData };
      default:
         return state;
   }
}