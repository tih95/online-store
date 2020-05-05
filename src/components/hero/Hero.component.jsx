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
        padding: 1.5em 0;
        height: 50vh;
        background: linear-gradient(to right, rgba(240, 242, 240, 0.5), rgba(0, 12, 64, 0.5)), url(${heroImg}) ;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <HeroContent>
        <HeroTitle>Welcome to Tristan's Coffee Shop</HeroTitle>
        <HeroSubTitle>Best Damn Coffee Around</HeroSubTitle>
        <CtaSection>
          <p>Check out our shop!</p>
          <ActionButton onClick={() => history.push('/shop')}>Order Now</ActionButton>
        </CtaSection>
      </HeroContent>
    </div>
  )
}

export default withRouter(Hero);