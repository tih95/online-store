import React from 'react';

const Category = ({ match }) => {
  return (
    <div>
      <h1>{match.params.category}</h1>
    </div>
  )
}

export default Category;