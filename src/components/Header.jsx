import { Avatar, Navbar, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const user = {};
  //   const user = null;
  return (
    <Navbar fullWidth className="text-mainColor">
      <div className="container flex flex-wrap items-center">
        <Typography as={NavLink} to="/" className="cursor-pointer">
          <Typography variant="h2">Jobs</Typography>
        </Typography>

        <div className="ms-auto flex gap-3 items-center">
          <Avatar
            src={user ? '/images/profile.png' : ''}
            alt="profile"
            className="cursor-pointer"
          />

          {user && <Typography variant="h6">Ahmed Ezzat</Typography>}
          {/* {user ? (
            <Button variant="outlined" size="sm" className="outline-btn">
              Logout
            </Button>
          ) : (
            <NavLink
              to="/login"
              variant="outlined"
              size="sm"
              as={Button}
              className="outline-btn"
            >
              Login
            </NavLink>
          )} */}
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
