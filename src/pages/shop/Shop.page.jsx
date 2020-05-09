import React from 'react';
import { Route } from 'react-router-dom';

import CategoriesOverview from '../../components/categories-overview/CategoriesOverview.component';
import Category from '../category/Category.page';
import Product from '../product/Product.page';

const Shop = ({ match }) => {
  
  return (
    <>
      <Route exact path={`${match.path}`} component={CategoriesOverview} />
      <Route path={`${match.path}/:category`} component={Category} />
      <Route path={`${match.path}/:category/:product`} component={Product} />
    </>
  )
}

export default Shop;