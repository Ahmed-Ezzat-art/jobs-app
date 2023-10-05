import { Button as MuiButton } from '@material-tailwind/react';

const Button = ({ title, variant, handleClick, className, ...others }) => {
  return (
    <MuiButton
      variant={variant}
      onClick={handleClick}
      className={className}
      {...others}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
