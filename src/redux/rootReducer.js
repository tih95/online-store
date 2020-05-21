import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopDataReducer from './shop-data/shopData.reducer';
import menuReducer from './menu/menu.reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  shopData: shopDataReducer,
  menu: menuReducer
});

export default persistReducer(persistConfig, rootReducer);