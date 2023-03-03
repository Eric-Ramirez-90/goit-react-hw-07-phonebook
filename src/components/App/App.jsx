import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operation';
// Libraries
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
// Styles
import { Section, SubTitle, Title } from './App.styled';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} rtl position="top-center" />
    </Section>
  );
}

export default App;
