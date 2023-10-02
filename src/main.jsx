import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';
import './index.css';
import RootLayout from './layouts/RootLayout.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: 'true',
        element: <Home />,
      },
    ],
  },

  {
    path: 'login',
    element: <Login />,
  },

  {
    path: 'register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
