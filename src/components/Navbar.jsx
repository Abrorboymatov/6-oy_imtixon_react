import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

export default function Nav ()  {
  

 

  return (
    <nav className='flex px-[30px] py-[28px] justify-between bg-[#232536] items-center md:px-[140px]'>
        <div><img src={Logo} alt="" /></div>
        <div className='hidden md:block md:flex md:text-[#FFFFFF] md:text-[16px] md:items-center md:gap-[24px]'>
             <Link className='hover:text-[green]' to="/">Home</Link>
            <Link className='hover:text-[green]' to="/company">Company</Link>
            <Link className='hover:text-[green]' to="/career">Career</Link>
            <Link className='hover:text-[green]' to="/blog">Blog</Link>
            <Link className='hover:text-[green]'>Contact us</Link>
            <Link className='hover:text-[#FFD3AF]'>Clone project</Link>
        </div>
    </nav>
  );
};
