import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { addCartItem } from '../../redux/cart/cart.actions';
import { 
  ProductImage, 
  AddCartButton, 
  ProductContainer,
  RightColumn,
  LeftColumn, 
  ProductTitle,
  ProductDescription, 
  ProductPrice} from './Product.styles';
import { selectCategory } from '../../redux/shop-data/shopData.selectors';

const Product = ({ addItemToCart, category, match }) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState();
  
  useEffect(() => {
    
    const found = category.products.find(product => {
      return product.slug === match.params.product;
    })
    console.log(found);
    setProduct(found);
  }, [])

  const minusQuantity = () => {
    if (quantity - 1 < 0) {

    }

    setQuantity(quantity - 1);
  }

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  }


  if (!product) {
    return null;
  }
  else {
    return (
      <ProductContainer>
        <LeftColumn>
          <ProductImage src={product.imgUrl} alt={`${product.title}`} />
        </LeftColumn>
        <RightColumn>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <p>Quantity: <AiOutlineMinus />{quantity} <AiOutlinePlus/></p>
          <AddCartButton onClick={() => addItemToCart(product)}>Add to cart</AddCartButton>
        </RightColumn>
      </ProductContainer>
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