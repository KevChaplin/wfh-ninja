import * as React from 'react';
import Container from '@mui/material/Container';

import Login from './Login'
import Profile from './Profile'
import Timer from './Timer'

export default function App() {
  return (
    <Container maxWidth="sm" sx={{ height: '90vh', width: '100vw', bgcolor: 'primary.main', my: 5 }}>
      {/* <Login /> */}
      {/* <Profile /> */}
      <Timer />
    </Container>
  );
}
