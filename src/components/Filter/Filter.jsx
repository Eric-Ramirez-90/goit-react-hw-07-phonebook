import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../redux/selectors';
import { filteredContacts } from '../../redux/filterSlice';
import { Container, Input, Label } from './Filter.styled';

function Filter() {
  const filter = useSelector(selectFilter) || '';
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    const value = evt.currentTarget.value.trim();

    if (typeof value === 'string') {
      dispatch(filteredContacts(value));
    }
  };

  return (
    <Container>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={changeFilter} />
        {contacts.length > 0 && (
          <div>
            <h3>
              Total contacts: <span>{contacts.length}</span>
            </h3>
          </div>
        )}
      </Label>
    </Container>
  );
}

export default Filter;
