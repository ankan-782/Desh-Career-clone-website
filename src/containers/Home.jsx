import Input from "../components/common/Input";

export default function Home() {
    return (
        <section className="container">
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-16 place-items-center laptop:place-item-start">
                <div className="space-y-6 text-center laptop:text-left mobile-lg:max-w-md laptop:max-w-none">
                    <h1 className="text-5xl laptop:text-6xl font-semibold">Get Smarter about your career</h1>
                    <p>Get the <span className="font-bold">5-minute newsletter</span> keeping about smart career</p>
                    <div className="p-4 grid grid-cols-[1.5rem_1fr] gap-4 mobile-md:grid-cols-[1.5rem_1fr_max-content] items-center shadow-lg rounded-lg">
                        <div>
                            <img src="/src/assets/envelope-regular.svg" alt="email input box" />
                        </div>
                        <Input type="email" placeholder="Your Email Address" />
                        <button className="bg-[#dc3545] text-white px-3 py-2 rounded col-span-2 mobile-md:col-span-1">Join Free</button>
                    </div>
                    <p>We are committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
                </div>
                <div>
                    <img src="/src/assets/earth.svg" alt="homepage hero image" />
                </div>
            </div>
        </section>
    );
}
