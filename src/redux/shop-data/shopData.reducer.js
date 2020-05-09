import shop_data from './shopData';

const INITIAL_STATE = {
  categories: shop_data
}

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default shopDataReducer;