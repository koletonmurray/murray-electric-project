import Logo from "../Logo";

export default function Success () {
    return (
        <div className="max-w-4xl mx-auto px-8 min-h-[300px]">
            <h1 className="pb-10">Success</h1>
            <p className="text-left">Your appliation has been submitted successfully! Thank you for your time in applying! Feel free to explore our website and reach out with any further questions.</p>
            <p className="text-left">- <Logo/> -</p>
        </div>
    )
}