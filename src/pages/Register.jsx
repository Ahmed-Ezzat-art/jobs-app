import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import Button from '../components/Button';

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    phones: Yup.string().required('At least one phone is required'),
    whatsPhone: Yup.string().required('WhatsApp phone is required'),
  });

  const inintialValues = {
    name: '',
    email: '',
    password: '',
    phones: '',
    whatsPhone: '',
  };

  const handleSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <Typography variant="h2" className="text-mainColor mb-8">
        Sign Up
      </Typography>
      <Formik
        initialValues={inintialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-[360px] md:w-[500px] grid grid-cols-1  shadow-md p-8 gap-3">
          <TextField label="Name" name="name" className="w-full" />
          <TextField label="Email" name="email" type="email" />
          <TextField label="Password" name="password" type="password" />
          <TextField label="Phones" name="phones" type="tel" />
          <TextField label="WhatsApp phone" name="whatsPhone" type="tel" />
          <Button
            className="mt-3 btn bg-mainColor"
            fullWidth
            type="submit"
            title="Register"
            size="sm"
          />

          <Typography color="gray" className="mt-2 text-center font-normal">
            Already have an account?{' '}
            <NavLink to="/login" className="font-medium">
              Sign In
            </NavLink>
          </Typography>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
