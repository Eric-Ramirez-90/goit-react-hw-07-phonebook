import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { selectIsLoading } from 'redux/selectors';
import { ThreeCircles } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { Button, DataConteiner, Text } from './ContactItem.styled';

function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <DataConteiner>
        <Text>{name}:</Text>
        <Text>{number}</Text>
      </DataConteiner>
      <Button onClick={onDelete} disabled={isLoading}>
        {isLoading ? (
          <ThreeCircles height="20" width="20" color="#005BBB" />
        ) : (
          'Delete'
        )}
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.exact({
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
