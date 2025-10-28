import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ClientLogin from './pages/ClientLogin';
import ForgotPassword from './pages/ForgotPassword';
import BookDemo from './pages/BookDemo';
import PatientAccess from './pages/PatientAccess';
import MidCycle from './pages/MidCycle';
import BillingDenials from './pages/BillingDenials';
import Analytics from './pages/Analytics';
import Hospitals from './pages/Hospitals';
import SpecialtyClinics from './pages/SpecialtyClinics';
import BillingCompanies from './pages/BillingCompanies';
import WhyUs from './pages/WhyUs';
import Resources from './pages/Resources';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Press from './pages/Press';
import Security from './pages/Security';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ClientLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/book-demo" element={<BookDemo />} />
          
          {/* Platform routes */}
          <Route path="/platform/patient-access" element={<PatientAccess />} />
          <Route path="/platform/mid-cycle" element={<MidCycle />} />
          <Route path="/platform/billing-denials" element={<BillingDenials />} />
          <Route path="/platform/analytics" element={<Analytics />} />
          
          {/* Solutions routes */}
          <Route path="/solutions/hospitals" element={<Hospitals />} />
          <Route path="/solutions/specialty-clinics" element={<SpecialtyClinics />} />
          <Route path="/solutions/billing-companies" element={<BillingCompanies />} />
          
          {/* Other routes */}
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/resources" element={<Resources />} />
          
          {/* Company routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/press" element={<Press />} />
          <Route path="/security" element={<Security />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
