import { lazy, useState } from 'react';
import NavBar from './NavBar';
import NavDrawer from './NavDrawer';
import Drawer from '@mui/material/Drawer';
import Topbar from './Topbar';

const routes = [
    {
      label: "Return to Main Site",
      path: "/",
    }
  ];


export default function AdminLayout ({ children }) {  
    const [mobileNavOpen, setMobileNavOpen] = useState(false);  

    return  (
        <>
            <Topbar open={mobileNavOpen} setOpen={setMobileNavOpen} admin={true}/>
            <Drawer open={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
                <NavDrawer routes={routes} setOpen={setMobileNavOpen} admin={true}/>
            </Drawer>
            <NavBar routes={routes}/>
            <main className='pt-10 bg-white text-midBlue'>
                {children}
            </main>
        </>
    )
}