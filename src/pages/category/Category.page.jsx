import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';

import { capitalize } from '../../helpers';
import ProductPreviewCard from '../../components/product-preview-card/ProductPreviewCard.component';
import { selectCategory } from '../../redux/shop-data/shopData.selectors';
import { PreviewCardsContainer } from '../../components/category-preview/CategoryPreview.styles';

const Category = ({ category }) => {
  return (
    <div 
      css={`
      max-width: 1024px;
      margin: 0 auto;
      padding: 3em;

      @media (max-width: 700px) {
        padding: 1em;
      }
  `}>
      <h1>{capitalize(category.title)}</h1>
      <PreviewCardsContainer>
      {
        category.products.map(product => <ProductPreviewCard key={product.id} product={product} />)
      }
      </PreviewCardsContainer>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(Category);