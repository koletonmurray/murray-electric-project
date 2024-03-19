import React from 'react';
import { Button } from '@mui/material';
import { IconButton } from '../IconButton'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <footer>
            <div className='py-4'></div>

            {/* Section 1 = Newsletter */}

            <div className='flex justify-center'>
                <div className='mobile-width sm:w-1/2 border-t border-b-0 border-x-0 border-dotted border-2 border-gray-400 py-10'>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5'>
                        
                        <Link to={`/subscribe-newsletter`}>
                            <Button variant='outlined' style={{maxWidth: '600px', maxHeight: '200px', color: 'royalblue', fontSize: '20px'}}>Subscribe to our weekly newsletter &nbsp;<EmailIcon className='text-royal' fontSize='medium'/></Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Section 2 = Contact/Social/Podcast */}
            
            <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-8 xl:gap-64 py-8'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl font-semibold pb-2 text-navy'>Contact</h3>
                    <a className='text-linkBlue pb-2' href="https://www.google.com/maps/place/BYU+Studies/@40.248106,-111.6536607,882m/data=!3m2!1e3!4b1!4m5!3m4!1s0x874d90ba8b4f56dd:0xfbe14d06eba89ee5!8m2!3d40.248106!4d-111.651472" target='_blank'>
                        <BusinessIcon className='translate-x-[-25%] translate-y-[-7.5%]'/>
                        1063 JFSB <br/>Provo, UT 84602
                    </a>
                    <a className='text-linkBlue pb-2' href="tel:8014226691">
                        <PhoneIcon className='translate-x-[-25%] translate-y-[-7.5%]'/>
                        801-422-6691
                    </a>
                    <a className='text-linkBlue pb-2' href="mailto:byustudies@byu.edu">
                        <EmailIcon className='translate-x-[-25%] translate-y-[-7.5%]'/>
                        byustudies@byu.edu
                    </a>
                </div>
                <div className='flex flex-col items-center'>
                    <h3 className='text-2xl font-semibold pb-2 sm:pb-8 text-navy'>Social Media</h3>
                    <div className='flex gap-1'>
                        <IconButton href="https://www.facebook.com/koleton-murray/" target="_blank" icon={<FacebookIcon />} color="#3b5998" logoColor={"#FFFFFF"} />
                        <IconButton href="https://www.instagram.com/koleton-murray/" target="_blank" icon={<InstagramIcon />} color="#C13584" logoColor={"#FFFFFF"} />
                    </div>
                </div>
            </div>

            {/* Section 3 = Footer Menu (About, Staff, News) */}

            <div className='flex justify-center p-6 gap-8 bg-lightBlue text-navy'>
                <Link to={'/about'}>
                    <div>About BYU Studies</div>
                </Link>
                <Link to={'/staff'}>
                    <div>Meet the Staff</div>
                </Link>
                <Link to={'/press'}>
                    <div>BYU Studies in the News</div>
                </Link>
            </div>

            {/* Section 4 = BYU Footer, privacy */}
            <div className='justify-center p-6 bg-navy text-white'>
                <div className='text-3xl font-semibold pb-4 py-2'><a href='https://byu.edu' target='_blank'>Brigham Young University</a></div>
                <div className='py-2'></div>
                <p>Provo, UT 84602, USA | © 2023</p>
                <p className='py-2'><a href='https://infosec.byu.edu/privacy-notice' target='_blank'>Privacy Notice</a> | <a href='https://infosec.byu.edu/cookie-prefs' target='_blank'>Cookie Preferences</a></p>
            </div>
        </footer>
    )
}