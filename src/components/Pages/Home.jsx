import React from "react";
import logoImage from '../../assets/logoSquare.png';
import Logo from '../Logo';

export default function Home() {
    return (
        <>
            <h1>Welcome to <Logo dropPeriod={true}/>!</h1>
            <div className="flex flex-col md:flex-row items-center justify-center p-4">
                <div className="flex-1 flex justify-center">
                    <img className="h-[17em]" src={logoImage} alt="Logo of Murray Electric Corp." />
                </div>
                <div className="flex-1 text-left">
                    <p>
                       <Logo/> is a premier electrical services provider specializing in commercial, industrial, and residential electrical installations and repairs. With years of experience in the industry, Murray Electric is dedicated to delivering high-quality, reliable solutions tailored to meet the unique needs of our clients. Whether it's new construction, renovations, or routine maintenance, our team of certified electricians is committed to ensuring your projects are completed on time and to the highest standards of safety and efficiency.
                    </p>
                </div>
            </div>
        </>
    );
}
