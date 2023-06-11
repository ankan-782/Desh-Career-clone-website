import { Link } from "react-router-dom";
import contactAddress from "../assets/contact-address.svg";

export default function ContactUs() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-16 place-items-center">
                <div>
                    <img src={contactAddress} className="mobile-lg:max-w-md laptop:max-w-lg" alt="contact us address image" />
                </div>
                <div className="space-y-6 mobile-lg:max-w-md laptop:max-w-none">
                    <h2 className="text-5xl laptop:text-6xl font-semibold text-center laptop:text-start">Contact Us</h2>
                    <address className="font-semibold">
                        If you want to contact us: you can send an email to <Link to='mailto:contact.deshcareer@gmail.com' className="text-blue-700">contact.deshcareer@gmail.com</Link> <br />
                        If you want to meet with us, you can come to our office based on an appointment. <br /> <br />
                        Our Office address: <br />
                        House: 13/3, <br />
                        Road: 2, <br />
                        Shyamoly, Dhaka-1207 <br />
                        +8801880811047
                    </address>
                    <ul className="flex gap-4 items-center" role="list" aria-label="social links">
                        <li className="hover:text-black/70 transition-colors">
                            <Link aria-label="facebook" to="https://www.facebook.com/deshcareer">
                                <i className="fa-brands fa-facebook fa-2xl"></i>
                            </Link>
                        </li>
                        <li className="hover:text-black/70 transition-colors">
                            <Link aria-label="youtube" to="https://www.youtube.com/channel/UCQB33GJ0C3pL3IpxpVFQS2Q">
                                <i className="fa-brands fa-youtube fa-2xl"></i>
                            </Link>
                        </li>
                        <li className="hover:text-black/70 transition-colors">
                            <Link aria-label="linkedin" to="https://www.linkedin.com/company/deshcareer/">
                                <i className="fa-brands fa-linkedin-in fa-2xl"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
