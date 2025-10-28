import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Zap, Clock, Bell, AlertCircle, FileText, TrendingUp } from 'lucide-react';

function PatientAccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Patient Access
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Streamline Pre-Visit Workflows.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Automate insurance verification, obtain prior authorizations, and schedule appointments seamlessly—all before the patient walks through your door.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Book Your Personalized Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-16">
            {/* Overview */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Pre-Visit Workflows</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Our Patient Access platform eliminates the friction between scheduling and care. Automate insurance verification, 
                obtain prior authorizations, calculate cost estimates, and schedule appointments seamlessly—all before the patient walks through your door. 
                Reduce no-shows, improve patient satisfaction, and ensure every visit is pre-approved and financially cleared.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Real-Time Insurance Verification</h3>
                      <p className="text-gray-700 mb-4">
                        Instant eligibility checks for all major payers including Medicare, Medicaid, and commercial plans. 
                        Verify coverage, deductibles, copays, and benefits in seconds—not days.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Batch processing for appointments scheduled weeks in advance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated re-verification before service date</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Integration with 2,000+ payer systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">Intelligent Prior Authorization</h3>
                      <p className="text-gray-700 mb-4">
                        AI-powered automation identifies services requiring prior auth and initiates the process automatically. 
                        Track status, receive notifications, and never miss a required authorization again.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated submission to payer portals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Clinical documentation support included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Real-time status updates and alerts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2">Smart Patient Scheduling</h3>
                      <p className="text-gray-700 mb-4">
                        Intelligent scheduling engine optimizes appointment slots based on provider availability, 
                        patient preferences, and clinic rules. Reduce no-shows with automated reminders.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Conflict detection across all departments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Multi-channel appointment booking (phone, online, kiosk)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated SMS and email confirmations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Transparent Cost Estimation</h3>
                      <p className="text-gray-700 mb-4">
                        Provide accurate cost estimates before the visit, including patient responsibility, 
                        coverage details, and payment options. Improve collections and patient trust.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Real-time deductible and out-of-pocket calculations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Flexible payment plan options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Financial counseling tools</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Why Patient Access Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Clock className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Reduce Wait Times</h3>
                  <p className="text-blue-100">
                    Pre-verified and cleared appointments start on time, improving clinic efficiency by up to 40%
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <FileText className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Increase Collections</h3>
                  <p className="text-blue-100">
                    Upfront cost estimates and payment plans improve point-of-service collections by 35%
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Bell className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Prevent Surprises</h3>
                  <p className="text-blue-100">
                    No more surprise bills—patients understand their costs before treatment begins
                  </p>
                </div>
              </div>
            </div>

            {/* Workflow Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Automatic Eligibility Check</h3>
                    <p className="text-gray-700">
                      When an appointment is scheduled, our system immediately verifies insurance eligibility, 
                      checking coverage status, copays, deductibles, and any restrictions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Prior Auth Processing</h3>
                    <p className="text-gray-700">
                      For services requiring authorization, the system automatically submits requests with clinical documentation, 
                      tracks status, and notifies staff when approval is received.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Estimation & Patient Communication</h3>
                    <p className="text-gray-700">
                      Patients receive accurate cost estimates via their preferred communication channel, can set up payment plans, 
                      and are automatically reminded of their upcoming appointment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cleared for Visit</h3>
                    <p className="text-gray-700">
                      Patient arrives with verified insurance, approved prior auth, and understanding of costs. 
                      Front desk time reduced by 70%, patient satisfaction increased significantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Seamless Integration</h2>
              <p className="text-lg text-gray-700 mb-6">
                Patient Access integrates with your existing systems to provide a complete workflow solution.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">EHR Systems</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Practice Mgmt</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Scheduling</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Revenue Cycle</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Patient Access?</h2>
              <p className="text-xl mb-6 text-blue-100">
                Reduce wait times, improve collections, and enhance patient experience—all before the visit begins.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/book-demo" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-center">
                  Schedule a Demo
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PatientAccess;
