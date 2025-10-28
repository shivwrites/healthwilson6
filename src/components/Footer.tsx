import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-16 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-[36px] h-[36px] flex items-center justify-center text-white font-bold text-[15px] rounded-[8px] shadow-[0_2px_4px_rgba(44,90,160,0.25)]" style={{background: 'linear-gradient(135deg, #2c5aa0 0%, #4a90e2 100%)'}}>
                HC
              </div>
              <h1 className="text-[20px] font-bold text-white m-0 tracking-[-0.3px]">
                Health Clarified
              </h1>
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Platform</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/platform/patient-access" className="text-sm hover:text-white transition-colors">Patient Access</Link></li>
              <li><Link to="/platform/mid-cycle" className="text-sm hover:text-white transition-colors">Mid-Cycle</Link></li>
              <li><Link to="/platform/billing-denials" className="text-sm hover:text-white transition-colors">Billing & Denials</Link></li>
              <li><Link to="/platform/analytics" className="text-sm hover:text-white transition-colors">Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Solutions</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/solutions/hospitals" className="text-sm hover:text-white transition-colors">Hospitals</Link></li>
              <li><Link to="/solutions/specialty-clinics" className="text-sm hover:text-white transition-colors">Specialty Clinics</Link></li>
              <li><Link to="/solutions/billing-companies" className="text-sm hover:text-white transition-colors">Billing Companies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal & Compliance</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/security" className="text-sm hover:text-white transition-colors">Security</Link></li>
              <li><Link to="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-4 flex space-x-2">
              <span className="inline-block bg-gray-700 text-gray-200 text-xs font-bold px-2 py-1 rounded">HIPAA COMPLIANT</span>
              <span className="inline-block bg-gray-700 text-gray-200 text-xs font-bold px-2 py-1 rounded">SOC 2</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="text-center mb-4">
            <p className="text-amber-400 text-sm font-semibold mb-2">
              ⚠️ Service Notice
            </p>
            <p className="text-gray-500 text-sm">
              Health Clarified is no longer accepting new clients or providing active services. This website serves as an informational archive only.
            </p>
          </div>
          <div className="text-center text-sm text-gray-600 mt-6">
            <p>&copy; {new Date().getFullYear()} Health Clarified. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

