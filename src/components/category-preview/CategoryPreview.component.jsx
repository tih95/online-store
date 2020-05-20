import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

import {capitalize} from '../../helpers';
import ProductPreviewCard from '../product-preview-card/ProductPreviewCard.component';
import { PreviewCardsContainer, CategoryPreviewContainer, SeeAllText } from './CategoryPreview.styles';

const CategoryPreview = ({ category }) => {

  return (
    <CategoryPreviewContainer>
      <h2>{capitalize(category.title)}</h2>
      
      <PreviewCardsContainer>
        {category.products.slice(0, 4).map(product => (
          <ProductPreviewCard key={product.id} product={product} />
        ))}
      </PreviewCardsContainer>

      <Link to={`${category.route}`}>
        <SeeAllText>
          <p>See all {category.title}</p>
          <AiOutlineRight />
        </SeeAllText>
      </Link>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;