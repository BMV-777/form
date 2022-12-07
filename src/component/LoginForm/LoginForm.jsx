import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(4).max(8).required(),
});

const Error = styled.p`
  color: blue;
`;
const Input = styled(Field)`
  color: green;
`;

const initialValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  // const handler = e => {
  //   e.preventDefault();
  //   const { login, password } = e.target.elements;
  //   console.log(login.value, password.value);
  // };

  const handler = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handler}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage component={Error} name="login" />
        </label>

        <label htmlFor="password">
          Password
          <Input type="text" name="password" />
          <ErrorMessage component={Error} name="password" />
        </label>
        <button type="submit">Summit</button>
      </Form>
    </Formik>
  );
};
