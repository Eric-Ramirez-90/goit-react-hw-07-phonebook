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
import Layout from 'components/Layout/Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} rtl position="top-center" />
    </Layout>
  );
}

export default App;
