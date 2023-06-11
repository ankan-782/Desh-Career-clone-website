import { Link } from "react-router-dom";
import address from "../assets/address.svg";

export default function AboutUs() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-16 place-items-center">
                <div className="space-y-6 mobile-lg:max-w-md laptop:max-w-none">
                    <h2 className="text-5xl laptop:text-6xl font-semibold text-center laptop:text-start">About Us</h2>
                    <p>Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM</p>
                    <address className="font-semibold">
                        If you want to contact us: you can send an email to <Link to='mailto:contact.deshcareer@gmail.com' className="text-blue-700">contact.deshcareer@gmail.com</Link> <br />
                        If you want to meet with us, you can come to our office based on an appointment. <br /> <br />
                        Our Office address: <br />
                        House: 13/3, <br />
                        Road: 2, <br />
                        Shyamoly, Dhaka-1207 <br />
                        +8801880811047
                    </address>
                    <h3 className="text-2xl font-bold after:content-['\201D'] before:content-['\201C'] p-6 shadow-md rounded-lg w-fit italic">We focus on Career trend, news, smart job etc.</h3>
                </div>
                <div>
                    <img src={address} className="mobile-lg:max-w-md laptop:max-w-lg" alt="about us address image" />
                </div>
            </div>
        </div>
    );
}
