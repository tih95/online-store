import React from 'react';
import { Route } from 'react-router-dom';

import CategoriesOverview from '../../components/categories-overview/CategoriesOverview.component';
import Category from '../category/Category.page';

const Shop = ({ match }) => {
  
  return (
    <>
      <Route exact path={`${match.path}`} component={CategoriesOverview} />
      <Route path={`${match.path}/:category`} component={Category} />
    </>
  )
}

export default Shop;