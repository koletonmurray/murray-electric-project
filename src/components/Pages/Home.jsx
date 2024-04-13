import React from "react";
import logoImage from '../../assets/logoSquare.png';
import Logo from '../Logo';
import applyImg from '../../assets/apply.png';

import { Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Welcome to <Logo dropPeriod={true}/>!</h1>
            <div className="max-w-5xl mx-auto">
                {/* About the company */}
                <div className="flex flex-col md:flex-row gap-12 items-center justify-center p-7">
                    <div className="flex-1 flex justify-center">
                        <img className="h-[17em]" src={logoImage} alt="Logo of Murray Electric Corp." />
                    </div>
                    <div className="flex-1 text-left">
                        <p>
                            <Logo/> is a premier electrical services provider specializing in commercial, industrial, and residential electrical installations and repairs. With years of experience in the industry, Murray Electric is dedicated to delivering high-quality, reliable solutions tailored to meet the unique needs of our clients. Whether it's new construction, renovations, or routine maintenance, our team of certified electricians is committed to ensuring your projects are completed on time and to the highest standards of safety and efficiency.
                        </p>
                    </div>
                </div>
            </div>

            {/* Apply */}
            <div className="bg-lightYellow p-10 flex flex-col sm:flex-row items-center gap-20 justify-center px-5">
                <div className='flex flex-col md:flex-row items-center gap-20 justify-center'>
                    <div className="flex flex-col justify-center">
                        <div className="text-darkBlue text-2xl pb-10">
                            <div>Join our team</div>
                            <div>or</div>
                            <div>Hire our services</div>
                        </div>
                        <div>
                            <Link to={"/contact-us"}>
                                <Button variant='contained'
                                        sx={{
                                            backgroundColor: '#3587a1',
                                            '&:hover': {
                                                backgroundColor: '#57b9d0',
                                            },
                                        }}>
                                    Reach out to us
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img className="rounded h-[250px] w-[275px] ml-0 md:ml-20" src={applyImg}/>
                    </div>
                </div>
            </div>
        </>
    );
}
