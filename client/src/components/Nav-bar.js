import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'

const pages = [['Login', '/login'], ['Timer', '/timer'], ['My Profile', '/profile']];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            WFH NINJA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              MenuListProps={{
                sx: {backgroundColor: "primary.main"}
              }}
            >
              {pages.map((page) => (
                //   Here have added 'component' parameter so that MenuItem has stlying as such, button functions as a react-router link.
                <MenuItem key={page[0]} onClick={handleCloseNavMenu} component={Link} to={page[1]}>
                  <Typography textAlign="center">{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            WFH NINJA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } }}>
            {pages.map((page) => (
              <Button
              //   Here have added 'component' parameter so that MenuItem has stlying as such, button functions as a react-router link.
                key={page[0]}
                component={Link}
                to={page[1]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
