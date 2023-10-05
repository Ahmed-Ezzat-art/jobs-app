import { Input } from '@material-tailwind/react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ name, label, ...others }) => {
  const [field, meta] = useField(name);
  return (
    <div>
      <Input
        {...field}
        {...others}
        label={label}
        error={meta.touched && Boolean(meta.error)}
        success={meta.touched && Boolean(!meta.error)}
      />

      <ErrorMessage name={name} className="error" component="div" />
    </div>
  );
};

export default TextField;
