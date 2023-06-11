import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0f0d32] text-[#c2cdff] py-4 absolute left-0 bottom-0 w-full">
            <div className="container">
                <div className="divide-y-2 divide-solid divide-slate-400">
                    <div className="py-8 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 laptop:gap-6 space-y-16 laptop:space-y-0 laptop:items-center">
                        <div className="grid grid-cols-1 tablet:col-span-2 laptop:col-auto gap-8 place-items-center laptop:place-items-start">
                            <Link to="/" aria-label="home">
                                <img className="w-56" src="/src/assets/logo.png" alt="logo" />
                            </Link>
                            <p className="text-center laptop:text-left max-w-[45ch] laptop:max-w-fit">Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM. </p>
                            <ul className="flex gap-4 items-center" role="list" aria-label="social links">
                                <li className="hover:text-slate-400 transition-colors">
                                    <Link aria-label="facebook" to="https://www.facebook.com/deshcareer">
                                        <svg className="social-icon">
                                            <use href="/src/assets/social-icons.svg#facebook"></use>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="hover:text-slate-400 transition-colors">
                                    <Link aria-label="youtube" to="https://www.youtube.com/channel/UCQB33GJ0C3pL3IpxpVFQS2Q">
                                        <svg className="social-icon">
                                            <use href="/src/assets/social-icons.svg#youtube"></use>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="hover:text-slate-400 transition-colors">
                                    <Link aria-label="linkedin" to="https://www.linkedin.com/company/deshcareer/">
                                        <svg className="social-icon">
                                            <use href="/src/assets/social-icons.svg#linkedin-in"></use>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-8 text-center">
                            <p className="text-2xl font-semibold">Privacy And Terms</p>
                            <nav aria-label="primary-footer-navigation">
                                <ul className="flex flex-col gap-4 justify-center underline underline-offset-4">
                                    <li>
                                        <Link className="hover:text-white transition-colors" to="/privacy/policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-white transition-colors" to="/terms/condition">Terms Condition</Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-white transition-colors" to="/faq">FAQ</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="space-y-8 text-center laptop:text-right">
                            <p className="text-2xl font-semibold">Support</p>
                            <nav aria-label="secondary-footer-navigation">
                                <ul className="flex flex-col gap-4 justify-center underline underline-offset-4">
                                    <li>
                                        <Link className="hover:text-white transition-colors" to="/affiliate">Affiliate Link</Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-white transition-colors" to="/contact/us">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-white transition-colors" to="/user/advertisement">Advertise with us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="py-8 space-y-6 tablet:space-y-0 flex flex-col tablet:flex-row tablet:justify-between items-center text-sm">
                        <p className="text-center tablet:text-left">© 2023 Newsletter E-mail Service: All Copy right reserved</p>
                        <nav aria-label="tertiary-footer-navigation">
                            <ul className="flex gap-4 justify-center underline underline-offset-4">
                                <li>
                                    <Link className="hover:text-white transition-colors" to="/terms/condition">Terms</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-white transition-colors" to="/">Cookie Policy</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-white transition-colors" to="/privacy/policy">Privacy</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
