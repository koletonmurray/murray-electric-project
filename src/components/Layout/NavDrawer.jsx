import React from 'react';
import { Link } from 'react-router-dom';

export default function NavDrawer({setOpen, routes}){

    return(
        <ul className='p-4 flex flex-col gap-2'>
            {routes.map((route) =>(
            <li className='' key={route.label}>
                <Link to={route.path} onClick={() => setOpen(false)} className={location.pathname === route.path ? 'text-midBlue underline decoration-2 underline-offset-8' : ''}>
                {route.label}
                </Link>
            </li>
            ))}
        </ul>
    )
}