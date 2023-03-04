import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;

  width: 400px;
  padding: 15px;

  background-color: rgb(2, 187, 2, 0.2);
  border-radius: 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;

  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  width: 260px;
  padding: 5px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  ::placeholder {
    color: #808080;
  }
  :focus {
    outline: 3px solid #475ce69e;

    ::placeholder {
      color: #ffffff;
    }
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 5px 10px;

  font-size: 16px;

  background-color: #ffffff;

  border: none;
  border-radius: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #4bb24b;
    color: #ffffff;
  }
`;

const ErrorText = styled.p`
  max-width: 260px;
  text-align: center;
  font-size: 12px;
  color: red;
`;

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
