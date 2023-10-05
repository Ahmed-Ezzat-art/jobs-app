import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import Button from '../components/Button';

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const inintialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <Typography variant="h2" className="text-mainColor mb-8">
        Login
      </Typography>
      <Formik
        initialValues={inintialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-[360px] md:w-[500px] grid grid-cols-1  shadow-md p-8 gap-3">
          <TextField label="Email" name="email" type="email" />
          <TextField label="Password" name="password" type="password" />
          <Button
            className="mt-3 btn bg-mainColor"
            fullWidth
            type="submit"
            title="Login"
            size="sm"
          />

          <Typography color="gray" className="mt-2 text-center font-normal">
            Don't have an account?{' '}
            <NavLink to="/register" className="font-medium">
              Register
            </NavLink>
          </Typography>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
