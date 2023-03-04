import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 500px;
  height: 500px;
  margin: 0 auto;
  padding: 15px;
  overflow: auto;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-left: 15px;
  padding-right: 15px;

  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;

  :hover {
    background-color: rgb(2, 187, 2, 0.2);
  }
`;
