import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../../redux/cart/cart.actions';
import { ProductImage } from './Product.styles';
import { selectCategory } from '../../redux/shop-data/shopData.selectors';

const Product = ({ addItemToCart, category, match }) => {
  const [product, setProduct] = useState();
  
  useEffect(() => {
    
    const found = category.products.find(product => {
      return product.slug === match.params.product;
    })
    console.log(found);
    setProduct(found);
  }, [])

  if (!product) {
    return null;
  }
  else {
    return (
      <div>
        <h1>{product.title}</h1>
        <ProductImage src={product.imgUrl} alt={`${product.title}`} />
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => addItemToCart(product)}>Add to cart</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.category)(state)
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addCartItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);