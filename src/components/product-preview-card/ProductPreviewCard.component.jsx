import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { Card, ContentSide, PreviewImage, Price } from './ProductPreviewCard.styles';

const ProductPreviewCard = ({ product }) => {
  return (
    <Card to={{
      pathname: `${product.route}`,
      state: {
        product
      }
    }}>
      <ContentSide>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <Price>${product.price.toFixed(2)}</Price>
      </ContentSide>
      <PreviewImage imgUrl={product.imgUrl} />
    </Card>
    
  )
}

export default withRouter(ProductPreviewCard);