import React from 'react';
import IconButton from '../IconButton'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Hyperlink from '../Hyperlink';
import Logo from '../Logo';

export default function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            {/* Section 1 = Contact/Social */}
            <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-8 xl:gap-64 py-8 bg-midBlue text-white'>
                {/* Section 1a - Contact Information */}
                <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl font-semibold pb-2 text-white'>Contact</h3>
                    <Hyperlink
                        href="https://maps.app.goo.gl/LWuMmUaAeAJrZeGB9"
                        IconComponent={BusinessIcon}
                        externalLink = {true}
                    >
                        XXXX East Maple St. <br/>Mapleton, UT 84664
                    </Hyperlink>
                    <Hyperlink
                        href="tel:801XXXXXXX"
                        IconComponent={PhoneIcon}
                        externalLink = {true}
                    >
                        801-XXX-XXXX
                    </Hyperlink>
                    <Hyperlink
                        href="mailto:office@murrayelectric.com"
                        IconComponent={EmailIcon}
                        externalLink = {true}
                    >
                        office@murrayelectric.com
                    </Hyperlink>
                </div>
                {/* Section 1b - Social Media Information */}
                <div className='flex flex-col items-center'>
                    <h3 className='text-2xl font-semibold pb-2 sm:pb-8 text-white'>Social Media</h3>
                    <div className='flex gap-1'>
                        <IconButton href="https://www.facebook.com/koleton.murray/" target="_blank" icon={<FacebookIcon />} color="#3b5998" logoColor={"#FFFFFF"} />
                        <IconButton href="https://www.instagram.com/koleton_murray/" target="_blank" icon={<InstagramIcon />} color="#C13584" logoColor={"#FFFFFF"} />
                        <IconButton href="https://www.linkedin.com/in/koleton-murray/" target="_blank" icon={<LinkedInIcon />} color="#0077B5" logoColor={"#FFFFFF"} />
                    </div>
                </div>
                {/* Section 1c - About Us/Our History */}
                 <div className='flex flex-col items-center'>
                    <h3 className='text-2xl font-semibold pb-2 sm:pb-8 text-white'>About Us</h3>
                     <Hyperlink href='/about'>
                        Learn About Our History
                    </Hyperlink>
                 </div>
            </div>

            {/* Section 2 = Footer, Privacy */}
            <div className='justify-center p-6 bg-darkBlue text-white'>
                <div className='text-3xl font-semibold py-4'><Logo/></div>
                <p className='text-white'>{`Mapleton, UT 84664, USA | © ${currentYear}`}</p>
                <Hyperlink href={'/privacy'}>
                    Privacy Notice
                </Hyperlink>
            </div>
        </footer>
    )
}