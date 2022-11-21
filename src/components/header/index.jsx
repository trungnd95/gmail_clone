import { AccountCircle, Apps, ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { IconButton, Menu } from '@mui/material';
import React from 'react';
import './index.css';
function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>

        <img 
          src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'
          alt='logo'
          width='100'
          height='40'
        />

      </div>

      <div className="header__middle">
        <Search />
        <input type="text" placeholder='Search mail' />
        <ArrowDropDown className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>

        <IconButton>
          <Notifications />
        </IconButton>

        <IconButton>
          <AccountCircle /> 
        </IconButton>
      </div>
    </div>
  )
}

export default Header