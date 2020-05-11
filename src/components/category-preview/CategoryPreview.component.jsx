import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

import {capitalize} from '../../helpers';
import ProductPreviewCard from '../product-preview-card/ProductPreviewCard.component';
import { PreviewCardsContainer, CategoryPreviewContainer, SeeAllContainer } from './CategoryPreview.styles';

const CategoryPreview = ({ category }) => {

  return (
    <CategoryPreviewContainer>
      <h2>{capitalize(category.title)}</h2>
      <PreviewCardsContainer>
        {category.products.slice(0, 4).map(product => (
          <ProductPreviewCard key={product.id} product={product} />
        ))}
      </PreviewCardsContainer>
      
      <SeeAllContainer>
        <Link to={`${category.route}`}>See all <span><AiOutlineRight /></span></Link>
      </SeeAllContainer>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;