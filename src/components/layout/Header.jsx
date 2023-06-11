import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../common/Button";

export default function Header() {
    const [navVisible, setNavVisible] = useState(false);
    const [navOverlay, setNavOverlay] = useState(false);

    const location = useLocation();

    function navToggle() {
        setNavVisible(!navVisible);
        setNavOverlay(!navOverlay);
    }

    return (
        <header data-overlay={navOverlay} className="py-4 header-nav-collapsed header-nav-expanded">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link to="/" aria-label="home">
                        <img className="w-32 laptop:w-56" src={logo} alt="logo" />
                    </Link>
                    <nav data-visible={navVisible} aria-label="header-navigation" className="p-8 laptop:p-0 bg-white  header-nav-list-collapsed header-nav-list-expanded">
                        <ul onClick={() => { setNavVisible(false); setNavOverlay(false); }} className="flex flex-col laptop:flex-row gap-6 items-center justify-center text-lg font-semibold">
                            <li>
                                <Link className={`${location.pathname === '/' ? 'text-[#dc3545]' : 'text-black'} hover:text-[#dc3545] transition-colors`} to="/">Home</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === '/privacy/policy' ? 'text-[#dc3545]' : 'text-black'} hover:text-[#dc3545] transition-colors`} to="/privacy/policy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === '/terms/condition' ? 'text-[#dc3545]' : 'text-black'} hover:text-[#dc3545] transition-colors`} to="/terms/condition">Terms Condition</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === '/about/us' ? 'text-[#dc3545]' : 'text-black'} hover:text-[#dc3545] transition-colors`} to="/about/us">About Us</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === '/contact/us' ? 'text-[#dc3545]' : 'text-black'} hover:text-[#dc3545] transition-colors`} to="/contact/us">Contact Us</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === '/user/advertisement' ? 'text-[#dc3545]' : 'text-black'} hover:text-[#dc3545] transition-colors`} to="/user/advertisement">Advertise</Link>
                            </li>
                            <li>
                                <form onSubmit={(e) => { e.preventDefault(); alert("You have joined"); }} className="block laptop:hidden">
                                    <Button type="submit" />
                                </form>
                            </li>
                        </ul>
                    </nav>
                    <form onSubmit={(e) => { e.preventDefault(); alert("You have joined"); }} className="hidden laptop:block">
                        <Button type="submit" />
                    </form>
                    <button onClick={navToggle} className="block laptop:hidden fixed right-4 z-40 bg-[url('/src/assets/hamburger.svg')] aria-[expanded=true]:bg-[url('/src/assets/close.svg')] bg-no-repeat bg-contain bg-center w-10 h-10" aria-controls="header-navigation"
                        aria-expanded={navVisible}>
                        <span className="invisible">Menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
