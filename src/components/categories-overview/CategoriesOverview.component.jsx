import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectAllCategories } from '../../redux/shop-data/shopData.selectors'
import CategoryPreview from '../category-preview/CategoryPreview.component';

const CategoriesOverview = ({ categories }) => {
  return (
    <div>
      <h1>Our Products</h1>
      {Object.keys(categories).map(key => (
        <CategoryPreview key={categories[key].id} category={categories[key]} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: selectAllCategories
})

export default connect(mapStateToProps)(CategoriesOverview);