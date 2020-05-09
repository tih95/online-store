import React from 'react';
import { withRouter } from 'react-router-dom';

import { Card, ContentSide, PreviewImage } from './ProductPreviewCard.styles';

const ProductPreviewCard = ({ product, history }) => {
  return (
    <Card onClick={() => history.push('')}>
      <ContentSide>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </ContentSide>
      <PreviewImage src={product.imgUrl} />
      
      
    </Card>
  )
}

export default withRouter(ProductPreviewCard);