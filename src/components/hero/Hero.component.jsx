import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';

import heroImg from '../../assets/landing-background.jpg';
import { 
  HeroTitle, 
  HeroContent, 
  ActionButton,
  HeroSubTitle, 
  CtaSection } from './Hero.styles';

const Hero = ({ history }) => {
  return (
    <div
      css={`
        padding: 5em 4em;
        background: linear-gradient(to right, rgba(240, 242, 240, 0.5), rgba(0, 12, 64, 0.5)), url(${heroImg}) ;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        align-items: center;
        display: flex;
      `}
    >
      <HeroContent>
        <HeroTitle>Welcome to T-City *FAKE* Coffee Shop</HeroTitle>
        <CtaSection>
          <p>Check out our shop!</p>
          <ActionButton onClick={() => history.push('/shop')}>Order Now</ActionButton>
        </CtaSection>
      </HeroContent>
    </div>
  )
}

export default withRouter(Hero);