import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Container } from './Layout.styled';
const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
