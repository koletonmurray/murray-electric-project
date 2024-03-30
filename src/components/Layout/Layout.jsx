import { useState } from 'react';
import NavBar from './NavBar';
import NavDrawer from './NavDrawer';
import Drawer from '@mui/material/Drawer';
import Footer from './Footer';
import Topbar from './Topbar';

const routes = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Past Projects",
      path: '/projects'
    },
    {
      label: "Contact Us",
      path: '/contact-us'
    }
  ];


export default function Layout ({ children }) {  
    const [mobileNavOpen, setMobileNavOpen] = useState(false);  

    return  (
        <>
            <Topbar open={mobileNavOpen} setOpen={setMobileNavOpen} />
            <Drawer open={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
                <NavDrawer routes={routes} setOpen={setMobileNavOpen}/>
            </Drawer>
            <NavBar routes={routes}/>
            <main className='px-10 sm:px-20 py-10 bg-white text-midBlue'>
                {children}
            </main>
            <Footer />
        </>
    )
}