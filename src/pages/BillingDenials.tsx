import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, DollarSign, TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react';

function BillingDenials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-red-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Billing & Denials
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Stop Denials Before They Stop You.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Prevent 90% of claim denials before submission, accelerate payment processing, and automatically work denied claims to recover revenue.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Book Your Personalized Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Turn Denials Into Dollars
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From claim scrubber to denial management, Health Clarified ensures every claim gets paid the first time—and quickly recovers those that don't.
            </p>
          </div>
          
          {/* Feature Grid */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Feature 1: AI-Powered Claim Scrubber */}
              <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">AI-Powered Claim Scrubber</h3>
                    <p className="text-gray-700 mb-4">
                      Every claim gets scrutinized before submission using payer-specific rules, coding guidelines, and historical denial patterns. Catch errors that would guarantee denials.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Real-time validation against 50,000+ payer rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Auto-corrects common errors and suggests fixes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 2: Smart Payment Posting */}
              <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Smart Payment Posting & ERA Processing</h3>
                    <p className="text-gray-700 mb-4">
                      Automatically post ERAs (Electronic Remittance Advices) from all payers, matching payments to claims with intelligent auto-post logic. Eliminate manual entry and catch payment errors.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Auto-matches ERA payments to claims in seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Reduces payment posting time by 80%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 3: Intelligent Denial Management */}
              <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300 md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-900 mb-2">Intelligent Denial Management</h3>
                    <p className="text-gray-700 mb-4">
                      When denials happen, recover them fast. Our AI analyzes denial reasons, categorizes them by type, suggests appeal strategies, and even auto-generates corrected claims for re-submission.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Auto-identifies appealable denials and prioritizes by value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Tracks denial trends to prevent repeat offenders</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The Billing & Denials Workflow</h2>
            <p className="text-lg text-gray-600">
              From claim creation to payment posting—we automate every step to ensure maximum revenue capture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Pre-Submission</h3>
              <p className="text-sm text-gray-600">Every claim scrubbed before it leaves your system</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. Submission</h3>
              <p className="text-sm text-gray-600">Claims submitted with confidence and tracking</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. Payment</h3>
              <p className="text-sm text-gray-600">Automated ERA processing and posting</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-200 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">4. Denial Recovery</h3>
              <p className="text-sm text-gray-600">Automatic appeal and resubmission workflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
            <p className="text-lg text-gray-600">
              Everything you need to maximize revenue and minimize denials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-red-300 hover:shadow-lg transition-all">
              <ShieldCheck className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Claim Validation</h3>
              <p className="text-gray-600">Real-time checks for coding errors, missing data, and payer-specific requirements</p>
            </div>

            <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Denial Analytics</h3>
              <p className="text-gray-600">Identify patterns, predict risks, and take proactive measures</p>
            </div>

            <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
              <Clock className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Work Queue Management</h3>
              <p className="text-gray-600">Prioritize and track denials with intelligent automation</p>
            </div>

            <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
              <CheckCircle className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Appeal Automation</h3>
              <p className="text-gray-600">Generate appeal letters and documentation automatically</p>
            </div>

            <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <DollarSign className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Recovery</h3>
              <p className="text-gray-600">Track and measure the dollars recovered from denials</p>
            </div>

            <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-red-300 hover:shadow-lg transition-all">
              <AlertCircle className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Alerts</h3>
              <p className="text-gray-600">Get notified immediately when denials occur or trends emerge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200 text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">90%</div>
              <p className="text-gray-600 font-medium">Denial Prevention Rate</p>
              <p className="text-sm text-gray-500 mt-2">Catch errors before submission</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200 text-center">
              <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">30%</div>
              <p className="text-gray-600 font-medium">Faster Payment Processing</p>
              <p className="text-sm text-gray-500 mt-2">Accelerate cash flow significantly</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-200 text-center">
              <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
              <p className="text-gray-600 font-medium">Denial Recovery Rate</p>
              <p className="text-sm text-gray-500 mt-2">Maximize revenue recovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="demo" className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stop Leaving Money on the Table.</h2>
            <p className="text-xl mb-6 text-red-100 max-w-3xl mx-auto">
              See exactly how much revenue Health Clarified can recover for you. Get a personalized, no-obligation demo with an RCM specialist today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book-demo" className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors shadow-lg text-center">
                Schedule a Demo
              </Link>
              <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default BillingDenials;
