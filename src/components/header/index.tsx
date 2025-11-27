"use client";

import styles from './Header.module.scss';
import { ChangeEvent, useState, MouseEvent}  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

export default function Header() {
   const [auth, setAuth] = useState(true);
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setAuth(event.target.checked);
   };

   const handleMenu = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'var(--white)'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'var(--primary-500)' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'var(--primary-500)' }}>
            <Link href="/" sx={{textDecoration: 'none', color: 'var(--primary-500)'}}>Control Hub</Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"

              >
                <AccountCircle sx={{color: 'var(--primary-500)'}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          {
            !auth && (
              <div>
                <Button color="inherit" sx={{color: 'var(--primary-500)'}}>Login</Button>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
   );
}