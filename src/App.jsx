import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import AboutUs from './containers/AboutUs';
import Advertisement from './containers/Advertise';
import ContactUs from './containers/ContactUs';
import Home from './containers/Home';
import PrivacyPolicy from './containers/PrivacyPolicy';
import TermsCondition from './containers/TermsCondition';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="/privacy/policy" element={<PrivacyPolicy />} />
                    <Route path="/terms/condition" element={<TermsCondition />} />
                    <Route path="/about/us" element={<AboutUs />} />
                    <Route path="/contact/us" element={<ContactUs />} />
                    <Route path="/user/advertisement" element={<Advertisement />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
