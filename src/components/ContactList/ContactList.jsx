import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import Notification from '../Notification';
import ContactItem from '../ContactItem';
import { Container, Item, List, Title } from './ContactList.styled';

function ContactList() {
  const filtredContact = useSelector(selectVisibleContacts) || '';
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Title>Contacts</Title>

      {isLoading && !error && <b>Request in progress...</b>}
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
