import Logo from "../Logo";

export default function Success () {
    return (
        <div className="max-w-4xl mx-auto px-8">
            <h1 className="pb-10">Success</h1>
            <p className="text-2xl pb-10">Your appliation has been submitted successfully!</p>
            <p className="text-left">Thank you for your time in applying! You'll hear from us shortly with further details. Feel free to explore our website and reach out with any other questions.</p>
            <p className="text-left pb-10">- <Logo/> -</p>
        </div>
    )
}