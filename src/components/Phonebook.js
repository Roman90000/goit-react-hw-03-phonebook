import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikBox } from './Phonebook.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .trim()
    .required('Required'),
  tel: Yup.number()
    .min(2, 'Too Short!')
    .positive('Must be positive')
    .required('Required'),
});

export const Phonebook = ({ onAdd }) => {
  return (
    <FormikBox>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </label>

          <label>
            Number
            <Field name="number" type="tel" />
            <ErrorMessage name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </FormikBox>
  );
};
