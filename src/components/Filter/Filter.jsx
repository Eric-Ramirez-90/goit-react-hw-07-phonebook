import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../redux/selectors';
import { filteredContacts } from '../../redux/filterSlice';
import {
  Container,
  Input,
  Label,
  SubTitle,
  Title,
  Wrapper,
} from './Filter.styled';

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
      <Title>Contacts</Title>

      <Wrapper>
        <Label>
          Find contacts by name or number
          <Input type="text" value={filter} onChange={changeFilter} />
        </Label>
        {contacts.length > 0 && (
          <div>
            <SubTitle>
              Total contacts: <span>{contacts.length}</span>
            </SubTitle>
          </div>
        )}
      </Wrapper>
    </Container>
  );
}

export default Filter;
