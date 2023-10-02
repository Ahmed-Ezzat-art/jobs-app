import { Button, Input, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <Typography variant="h2" className="text-mainColor mb-8">
        Sign Up
      </Typography>
      <form className="w-[300px] md:w-[400px] shadow-md p-8">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>

        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{' '}
          <NavLink to="/login" className="font-medium">
            Sign In
          </NavLink>
        </Typography>
      </form>
    </div>
  );
};

export default Register;
