import { Link } from "react-router-dom";
import advertisement from "../assets/advertisement.svg";

export default function Advertisement() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-16 place-items-center">
                <div className="space-y-6 mobile-lg:max-w-md laptop:max-w-none">
                    <h2 className="text-5xl laptop:text-6xl font-semibold text-center laptop:text-start">Advertisement</h2>
                    <p>Our audience age is 20-35 Year. </p>
                    <address className="font-semibold">
                        If you want to promote your product to our audience, <br />
                        you can give advertisement, Sponsored Content. <br /> 
                        Our contact email: <Link to='mailto:contact.deshcareer@gmail.com' className="text-blue-700">contact.deshcareer@gmail.com</Link> <br />
                    </address>
                    <h3 className="text-2xl font-bold after:content-['\201D'] before:content-['\201C'] p-6 shadow-md rounded-lg w-fit italic">We focus on Career related content.</h3>
                </div>
                <div>
                    <img src={advertisement} className="mobile-lg:max-w-md laptop:max-w-lg" alt="advertisement image" />
                </div>
            </div>
        </div>
    );
}
