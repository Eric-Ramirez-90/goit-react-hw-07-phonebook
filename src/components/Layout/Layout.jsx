import { Main, Title } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <Main>
      <Title>Phonebook</Title>
      {children}
    </Main>
  );
};

export default Layout;
