import { createSelector } from 'reselect';

const selectShopData = state => state.shopData;

export const selectAllCategories = createSelector(
  [selectShopData],
  shopData => shopData.categories
)

export const selectCategory = urlParam => 
  createSelector(
    [selectAllCategories],
    categories => categories[urlParam]
)

