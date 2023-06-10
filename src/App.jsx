import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AboutUs from './containers/AboutUs';
import Advertisement from './containers/Advertise';
import ContactUs from './containers/ContactUs';
import Home from './containers/Home';
import PrivacyPolicy from './containers/PrivacyPolicy';
import TermsCondition from './containers/TermsCondition';

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path="/privacy/policy" element={<PrivacyPolicy />} />
                    <Route path="/terms/condition" element={<TermsCondition />} />
                    <Route path="/about/us" element={<AboutUs />} />
                    <Route path="/contact/us" element={<ContactUs />} />
                    <Route path="/user/advertisement" element={<Advertisement />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
