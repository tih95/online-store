import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer
});

export default rootReducer;