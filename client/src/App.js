import * as React from 'react'
import Container from '@mui/material/Container'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Nav-bar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Timer from './Pages/Timer'

export default function App() {
  return (
    <Router>
      <Container maxWidth="sm" sx={{ height: '90vh', width: '100vw', bgcolor: 'primary.main'}}>
        <Navbar />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>    
      </Container>
    </Router>
  );
}
