import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import DirectorySection from '../directory-section/DirectorySection.component';
import { DirectoryContainer } from './Directory.styles';

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(section => (
        <DirectorySection key={section.id} section={section} />
      ))}
    </DirectoryContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);