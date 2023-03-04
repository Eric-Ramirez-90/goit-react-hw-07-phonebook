import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import Notification from '../Notification';
import ContactItem from '../ContactItem';
import { Container, Item, List } from './ContactList.styled';
import Loader from 'components/Loader/Loader';

function ContactList() {
  const filtredContact = useSelector(selectVisibleContacts) || '';
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && !error && <Loader size="50" />}
      {!isLoading && !contacts.length > 0 ? (
        <Notification message="There is no contacts" />
      ) : (
        <Container>
          {filtredContact && (
            <List>
              {filtredContact.map(contact => (
                <Item key={contact.id}>
                  <ContactItem contact={contact} />
                </Item>
              ))}
            </List>
          )}
        </Container>
      )}
    </>
  );
}

export default ContactList;
