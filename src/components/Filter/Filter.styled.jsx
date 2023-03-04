import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  padding: 15px;

  border-bottom: 5px dashed rgb(2, 187, 2, 0.3);
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;

  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 240px;
  padding: 5px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  :focus {
    outline: 3px solid #475ce69e;
  }
`;

export const SubTitle = styled.h3`
  color: #475ce6;
`;
