import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2.5 group h-full">
              <div className="w-[36px] h-[36px] group-hover:scale-110 transition-transform flex items-center justify-center text-white font-bold text-[15px] rounded-[8px] shadow-[0_2px_4px_rgba(44,90,160,0.25)]" style={{background: 'linear-gradient(135deg, #2c5aa0 0%, #4a90e2 100%)'}}>
                HC
              </div>
              <h1 className="text-[20px] font-bold text-[#2c5aa0] m-0 tracking-[-0.3px]">
                Health Clarified
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 transition-colors py-2 rounded-md text-sm font-medium">Platform</button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <Link to="/platform/patient-access" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Patient Access</Link>
                <Link to="/platform/mid-cycle" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mid-Cycle</Link>
                <Link to="/platform/billing-denials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Billing & Denials</Link>
                <Link to="/platform/analytics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Analytics & Reporting</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 transition-colors py-2 rounded-md text-sm font-medium">Solutions</button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <Link to="/solutions/hospitals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hospitals</Link>
                <Link to="/solutions/specialty-clinics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Specialty Clinics</Link>
                <Link to="/solutions/billing-companies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Billing Companies</Link>
              </div>
            </div>
            <Link to="/why-us" className="text-gray-600 hover:text-blue-600 transition-colors py-2 rounded-md text-sm font-medium">Why Us?</Link>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors py-2 rounded-md text-sm font-medium">Success Stories</Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Client Login</Link>
            <Link to="/book-demo" className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all">Book a Demo</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden shadow-lg border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/platform/patient-access" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Patient Access</Link>
            <Link to="/platform/mid-cycle" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Mid-Cycle</Link>
            <Link to="/platform/billing-denials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Billing & Denials</Link>
            <Link to="/platform/analytics" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Analytics & Reporting</Link>
            <Link to="/solutions/hospitals" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Hospitals</Link>
            <Link to="/solutions/specialty-clinics" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Specialty Clinics</Link>
            <Link to="/solutions/billing-companies" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Billing Companies</Link>
            <Link to="/why-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Why Us?</Link>
            <Link to="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Success Stories</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col items-start px-5 space-y-3">
              <Link to="/book-demo" className="w-full text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all">Book a Demo</Link>
              <Link to="/login" className="w-full text-center text-base font-medium text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">Client Login</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;


