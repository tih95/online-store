import React from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../../redux/cart/cart.actions';
import { ProductImage } from './Product.styles';

const Product = ({ location, addItemToCart }) => {
  const { product } = location.state;

  console.log(product);

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

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(Product);