import React from 'react';
import { Link } from 'react-router-dom';

export default function NavDrawer({setOpen, routes, admin = false}){

    return(
        <ul className='p-4 flex flex-col gap-2'>
            {routes.map((route) =>(
            <li className='list-none' key={route.label}>
                <Link to={route.path} onClick={() => setOpen(false)} className={location.pathname === route.path ? 'text-midBlue underline decoration-2 underline-offset-8' : ''}>
                {route.label}
                </Link>
            </li>
            ))}
            { !admin ? (
                <li className='list-none' key={'login'}>
                    <Link to={'/login'} onClick={() => setOpen(false)} className={location.pathname === '/login' ? 'text-midBlue underline decoration-2 underline-offset-8' : ''}>
                        Login
                    </Link>
                </li>
            ): (
                <li className='list-none' key={'login'}>
                    <Link to={'/logout'} onClick={() => setOpen(false)} className={location.pathname === '/logout' ? 'text-midBlue underline decoration-2 underline-offset-8' : ''}>
                        Logout
                    </Link>
                </li>
            )}
            
        </ul>
    )
}