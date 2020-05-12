import React from 'react';
import { connect } from 'react-redux';

import { capitalize } from '../../helpers';
import ProductPreviewCard from '../../components/product-preview-card/ProductPreviewCard.component';
import { selectCategory } from '../../redux/shop-data/shopData.selectors';

const Category = ({ category }) => {
  return (
    <div>
      <h1>{capitalize(category.title)}</h1>
      {
        category.products.map(product => <ProductPreviewCard key={product.id} product={product} />)
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(Category);