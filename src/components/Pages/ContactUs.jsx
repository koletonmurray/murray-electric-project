import ConstructionIcon from '@mui/icons-material/Construction';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Hyperlink from '../Hyperlink';
import Logo from '../Logo';

export default function ContactUs () {
    return (
        <>
            <h1>Contact Us</h1>

            <div className='w-[85%] sm:w-[70%] mx-auto'>
                <div className='flex flex-col items-center md:flex-row lg:justify-center gap-12 py-20 px-5'>
                    <div className='text-darkBlue'>
                        <div>
                            <WorkIcon sx={{fontSize: '70px'}} />
                        </div>
                        <h2 className='text-3xl font-semibold pb-5'>
                            Join Our Team
                        </h2>
                        <p className='text-left'>
                            Explore a career with <Logo/> Submit your application to become part of our team. We are dedicated to excellence in electrical services. We’re looking for skilled, passionate individuals ready to make a difference.
                        </p>
                        <div className='py-5'>
                            <Link to={'/apply'}>
                                <Button variant='contained'
                                    sx={{
                                        backgroundColor: '#57b9d0',
                                        '&:hover': {
                                            backgroundColor: '#3587a1',
                                        },
                                    }}>
                                    Apply Now
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className='text-darkBlue'>
                        <div>
                            <ConstructionIcon sx={{fontSize: '70px'}}/>
                        </div>
                        <h2 className='text-3xl font-semibold pb-5'>
                            Request Our Services
                        </h2>
                        <p className='text-left'>
                            Need professional electrical work? Fill out our form to hire <Logo/> Whether it's a small project or a large-scale operation, our expert team is ready to bring top-notch electrical solutions to your doorstep.
                        </p>
                        <div className='py-5'>
                            <Link to={"/request-services"}>
                                <Button variant='contained'
                                    sx={{
                                        backgroundColor: '#57b9d0',
                                        '&:hover': {
                                            backgroundColor: '#3587a1',
                                        },
                                    }}>
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4 pb-10'>
                    <h2 className='sm:text-5xl font-semibold'>Other Business Inquiries</h2>
                    <p className='text-center text-lg'>For all other business inquiries, please get in touch with our office directly.</p>
                    <div className='flex justify-center items-center gap-2 sm:text-xl'>
                        <Hyperlink
                            href="tel:801XXXXXXX"
                            IconComponent={PhoneIcon}
                            external = {true}
                            color = {'darkBlue'}
                        >
                            801-XXX-XXXX
                        </Hyperlink>
                    </div>
                    <div className='flex justify-center items-center gap-2 sm:text-xl'>
                        <Hyperlink
                            href="mailto:office@murrayelectric.com"
                            IconComponent={EmailIcon}
                            external = {true}
                            color = {'darkBlue'}
                        >
                            office@murrayelectric.com
                        </Hyperlink>
                    </div>
                </div>
            </div>
        </>
    )
}