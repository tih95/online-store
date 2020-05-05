import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';

const DirectorySection = ({ section, history, match }) => {
  console.log(match);
  return (
    <div
      css={`
        background: ${section.imgUrl};
        flex: 1;
      `}
      onClick={() => history.push(`${section.url}`)}>
      <h1>{section.title}</h1>

    </div>
  )
}

export default withRouter(DirectorySection);