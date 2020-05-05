import styled from 'styled-components';

export const HeroTitle = styled.h1`
  font-size: 3.4em;
  font-weight: 800;
`;

export const HeroSubTitle = styled.p`
  margin-top: 0.4em;
  font-size: 2.4em;
  font-weight: 200;
`;

export const HeroContent = styled.div`
  color: white;
  text-align: left;
`;

export const CtaSection = styled.div`
  margin-top: 3em;

  p {
    font-size: 1.5em;
  }

  > * {
    margin-bottom: 0.6em;
  }
`;

export const ActionButton = styled.button`
  border: 2px solid #55efc4;
  background: #55efc4;
  font-weight: 600;
  padding: 1em 1.2em;
  border-radius: 30px;
  
`;