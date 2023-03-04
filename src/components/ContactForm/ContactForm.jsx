import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operation';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, FormError, Input, Label, Wrapper } from './ContactForm.styled';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const validateName = value => {
  let errorMessage;
  if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
  ) {
    errorMessage =
      'Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer.';
  }
  return errorMessage;
};

const validateNumber = value => {
  let errorMessage;
  if (
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
      value
    )
  ) {
    errorMessage =
      'Phone number must be digits and can contain spaces, dashes.';
  }
  return errorMessage;
};

const initialValues = {
  name: '',
  number: '',
};

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const createContact = ({ name, number }, { resetForm }) => {
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase().trim() ===
          name.toLocaleLowerCase().trim()
      )
    ) {
      toast.error(`${name} is already in contacts`, { theme: 'colored' });
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      toast.error(`This ${number} is already in contacts`, {
        theme: 'colored',
      });
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={createContact}
        validationSchema={validationSchema}
      >
        <Form autoComplete="off">
          <Wrapper>
            <Label>
              Name
              <Input
                type="text"
                name="name"
                placeholder="Mark Twain"
                validate={validateName}
              />
              <FormError name="name" />
            </Label>
            <Label>
              Number
              <Input
                type="tel"
                name="number"
                placeholder="123-456-7890"
                validate={validateNumber}
              />
              <FormError name="number" />
            </Label>
            <Button type="submit">Add contact</Button>
          </Wrapper>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
