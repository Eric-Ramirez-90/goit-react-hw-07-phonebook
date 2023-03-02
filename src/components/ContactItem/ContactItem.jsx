// import { deleteContact } from 'redux/contactsSlice';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, DataConteiner, Text } from './ContactItem.styled';

function ContactItem({ contact: { id, name, phone } }) {
  // const dispatch = useDispatch();
  // const onDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <DataConteiner>
        <Text>{name}:</Text>
        <Text>{phone}</Text>
      </DataConteiner>
      <Button onClick={() => null}>Delete</Button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.exact({
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
