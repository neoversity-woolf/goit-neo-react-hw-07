import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import css from './ContactForm.module.css';

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must contain at least 3 chars')
    .max(50, 'Name must not exceed 50 chars')
    .required('This field is required'),
  number: Yup.string()
    .min(3, 'Number must contain at least 3 chars')
    .matches(
      /^[\d+\-()]{1,10}$/g,
      'Number must contain max 10 digits including +()-'
    )
    .required('This field is required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const onFormSubmit = (values, actions) => {
    const contact = {
      ...values,
      id: nanoid(),
    };
    dispatch(addContact({ contact }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onFormSubmit}
      validationSchema={ContactValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.field}>
          <span className={css.tag}>Name</span>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.field}>
          <span className={css.tag}>Number</span>
          <Field
            className={css.input}
            type="tel"
            name="number"
            maxLength="10"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
