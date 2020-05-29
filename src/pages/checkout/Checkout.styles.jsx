import styled from 'styled-components';
import Modal from 'react-modal';

export const CheckoutWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 2em;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const OrderSummary = styled.section`
  width: 40%;
  border-radius: 5px;
  border: 2px solid #dfe6e9;
  padding: 1em;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
    order: 1;
  }
`;

export const PricingDiv = styled.div`
  > * {
    margin-bottom: 0.6em;
  }
`;

export const CustomerDetails = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border: 2px solid #dfe6e9;
  border-radius: 5px;
  margin-right: 1em;
  

  @media (max-width: 700px) {
    width: 100%;
    margin-right: 0;
    order: 2;
    margin-top: 1em;
  }
`;

export const Button = styled.button`
  border: 1px solid black;
  padding: 1em;
  border-radius: 30px;
  color: white;
  cursor: pointer;

  background: black;
`;

export const InputLabel = styled.label`
  font-weight: 500;
  display: block;
`;

export const Input = styled.input`
  border: 2px solid rgba(0,0,0,0.3);
  border-radius: 3px;
  padding: 0.5em 0.7em;
  margin-top: 0.5em;
  line-height: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 0.5em;
  margin-right: 0.5em;
`;

export const StyledModal = styled(Modal)`
  max-width: 700px;
  margin: 2em auto;
  background: white;
  border: 2px solid #f2f2f2;
  padding: 2em;
  border-radius: 3px;
  height: 70%;
  align-self: center;
  justify-self: center;
  overflow-y: scroll;

  @media (max-width: 800px) {
    margin: 2em;
  }

  &:focus {
    outline: none;
  }
`;