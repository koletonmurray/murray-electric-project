import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../Logo';
import logoImage from '../../assets/logoSquare.png';
import iconImage from '../../assets/iconCircle.png';
import { IconButton } from '@mui/material';
import Menu from '@mui/icons-material/Menu';

function Topbar({ setOpen, admin = false }) {
  return (
    <>
      {!admin ? (
      <div className="bg-darkBlue flex justify-between items-center px-2 py-2 sm:py-4">
        <div className='flex justify-start items-center flex-1'>
          <div className='w-1/4 flex sm:hidden'>
            <IconButton onClick={() => setOpen(true)}>
              <Menu style={{ color: 'white' }}/>
            </IconButton>
          </div>
          <div className= 'hidden sm:flex px-4'>
            <Link to={'/'}>
              <Logo color={'yellow'} weight={'medium'} size={'xl'}/>
            </Link>
          </div>
        </div>
        
        <Link to={'/'}>
          <img src={logoImage} className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 h-[8em] pt-2" alt="Centered Image"/>
        </Link>

        <div className='hidden sm:flex justify-end items-center flex-1'>
          <Link to={'/login'}>
            <img src={iconImage} className='h-[3em] pr-3'/>
          </Link>
        </div>
      </div>
      ) : (
        <div className="bg-darkBlue flex justify-between items-center px-2 py-2 sm:py-4">
          <div className='flex justify-start items-center flex-1'>
            <div className='w-1/4 flex sm:hidden'>
              <IconButton onClick={() => setOpen(true)}>
                <Menu style={{ color: 'white' }}/>
              </IconButton>
            </div>
            <div className= 'hidden sm:flex px-4'>
              <Link to={'/admin'}>
                <Logo color={'yellow'} weight={'medium'} size={'xl'}/>
              </Link>
            </div>
          </div>
          <Link to={'/admin'}>
            <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 h-[8em] pt-2 text-yellow font-medium">Admin</h1>
          </Link>

          <div className='hidden sm:flex justify-end items-center flex-1'>
            <Link to={'/logout'} className='h-[3em]'>
              <h4 className='pr-3 text-yellow font-medium'>Logout</h4>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Topbar;
