import { useState } from 'react';
import Navigation from './Navbar';
import Footer from './Footer';
import Topbar from './Topbar';
//import Drawer from '@mui/material/Drawer';
//import NavDrawer from './NavDrawer/NavDrawer';
import { useLocation } from 'react-router-dom';
import { Box, Modal, Button } from '@mui/material';
//import Form from '../Forms/Form';
//import TextQuestion from '../Forms/TextQuestion';
//import RatingQuestoin from '../Forms/RatingQuestion';
//import TextAreaQuestion from '../Forms/TextAreaQuestion';
//import FormText from '../Forms/FormText';

const Layout = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        // p: 4,
    }
    
    const mobileModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '90%',
        height: '90%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        overflowY: 'auto',
    }
    
      const [rating, setRating] = useState(0);

    return  (
        <>
            <Topbar open={mobileNavOpen} setOpen={setMobileNavOpen} openCartDrawer={() => setCartDrawerOpen(true)}/>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
            {/* <Modal
                open={modalOpen}
                onClose={handleClose}
                >
                    <Box sx={window.innerWidth <= 767 ? mobileModalStyle : modalStyle}>
                        <Form>
                            <FormText text="Feedback Form" title={true}/>
                            <TextQuestion question="Email" required={true}/>
                            <RatingQuestoin question="How would you rate your experience with the BYU Studies website today?" required={true} rating={rating} setRating={setRating}/>
                            <TextAreaQuestion question="Comments"/>
                            <Button variant='contained' onClick={handleClose}>Submit</Button>
                        </Form>
                    </Box>
            </Modal> */}
            <div className='fixed z-[40] top-[50vh] right-0 origin-bottom-right -rotate-90'>
                <button className='bg-navy text-white p-2 text-sm' onClick={handleOpen}>Feedback</button>
            </div>
        </>
    )
}

export default Layout