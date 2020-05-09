import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopDataReducer from './shop-data/shopData.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  shopData: shopDataReducer
});

export default rootReducer;