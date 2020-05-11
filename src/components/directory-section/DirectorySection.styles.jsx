import styled from 'styled-components';

export const DirectorySectionContainer = styled.div`
  background: ${props => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  flex: 0 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

export const DirectorySectionTitle = styled.h1`
  padding: 0.5em;
  color: white;
  background: rgba(0,0,0,0.7);
  border-radius: 10px;
  margin: 0 auto;
`;