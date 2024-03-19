import React from 'react';
//import SearchBar from '../../SearchBar/SearchBar';
//import logo from '../../../assets/BYUS-Logo2.png'
//import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

function Topbar({setOpen, openCartDrawer}) {
  const navigate = useNavigate();

  const handleSearchBarClick = () => {
    console.log('clicked')
  }

  return (
    <div className="bg-navy flex justify-between items-center md:px-8 px-2 py-2 md:py-4">
      <div className= 'w-1/4 flex sm:hidden'>
        <IconButton onClick={() =>setOpen(true)} color='white'>
          <Menu/>
        </IconButton>
      </div>
      <a href='/'>
        <img className='h-5' src={logo} alt='logo'></img>
      </a>
    </div>
  );
}

export default Topbar;










