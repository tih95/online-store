import React from 'react';
import { withRouter } from 'react-router-dom';

import { Card, ContentSide, PreviewImage, Price, Description } from './ProductPreviewCard.styles';

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
        <Description>
          <p>{product.description}</p>
        </Description>  
        <Price>${product.price.toFixed(2)}</Price>
      </ContentSide>
      <PreviewImage imgUrl={product.imgUrl} />
    </Card>
    
  )
}

export default withRouter(ProductPreviewCard);