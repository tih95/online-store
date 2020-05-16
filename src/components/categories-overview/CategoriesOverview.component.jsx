import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';

import { selectAllCategories } from '../../redux/shop-data/shopData.selectors'
import CategoryPreview from '../category-preview/CategoryPreview.component';

const CategoriesOverview = ({ categories }) => {
  return (
    <div
      css={`
        max-width: 1024px;
        margin: 0 auto;
        padding: 3em;

        @media (max-width: 700px) {
          padding: 1em;
        }
      `}
    >
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