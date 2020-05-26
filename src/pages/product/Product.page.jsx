import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { addCartItem } from '../../redux/cart/cart.actions';
import { 
  ProductImage, 
  AddCartButton, 
  ProductContainer,
  RightColumn,
  LeftColumn, 
  ProductTitle,
  ProductDescription, 
  ProductPrice,
  QuantitySection,
  MinusIcon, 
  PlusIcon } from './Product.styles';
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
    if (quantity - 1 <= 0) {
      return;
    }

    setQuantity(quantity - 1);
  }

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  }

  const addToCart = () => {
    addItemToCart(product, quantity);
    toast.success("Successfully added to cart!");
    setQuantity(1);
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
          <QuantitySection>
            <p>Quantity: </p>
            <div
              css={`
                border: 2px solid black;
                padding: 0.4em;
                display: flex;
                align-items: center;
                margin-left: 0.4em;
              `}
            >
              <MinusIcon disabled={quantity - 1 === 0} onClick={() => minusQuantity()} />
              <p css={`margin: 0 0.5em;`}>{quantity}</p>
              <PlusIcon onClick={() => plusQuantity()} />
            </div>
          </QuantitySection>
          <AddCartButton onClick={() => addToCart()}>Add to cart</AddCartButton>
        </RightColumn>
        <ToastContainer
          position="bottom-center"
          autoClose={2500}
          closeOnClick
          hideProgressBar={true} 
        />
      </ProductContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.category)(state)
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: (item, quantity) => dispatch(addCartItem(item, Number(quantity)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);