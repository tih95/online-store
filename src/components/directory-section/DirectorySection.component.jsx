import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { DirectorySectionContainer, DirectorySectionTitle } from './DirectorySection.styles';
import { capitalize } from '../../helpers';

const DirectorySection = ({ section, history, match }) => {
  console.log(section.url);
  return (
    <DirectorySectionContainer
      imgUrl={section.imgUrl}
      onClick={() => history.push(`${section.url}`)}
    >
      <DirectorySectionTitle>{capitalize(section.title)}</DirectorySectionTitle>
    </DirectorySectionContainer>
  )
}

export default withRouter(DirectorySection);