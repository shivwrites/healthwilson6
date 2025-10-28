import { useState } from 'react';
import { CheckCircle, FileText, AlertTriangle, Scale, CreditCard, Shield, X, Loader2, Send } from 'lucide-react';

function TermsOfService() {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-violet-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Terms of Service
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Terms and Conditions for Using Health Clarified.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Please read these terms carefully. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <div className="mt-10 flex justify-center">
              <button 
                onClick={handleContactClick}
                className="text-base font-medium text-white bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Contact Legal Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-16">
            {/* Last Updated */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 max-w-4xl mx-auto">
              <p className="text-sm text-gray-700">
                <strong>Last Updated:</strong> July 2024
              </p>
            </div>

            {/* Introduction */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer," "you," or "your") 
                and Health Clarified Inc. ("Health Clarified," "we," "our," or "us") governing your use of our healthcare revenue 
                cycle management platform and services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, 
                you may not use our services. Please read these Terms carefully before using our platform.
              </p>
            </div>

            {/* Key Sections */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Terms & Conditions</h2>
              <div className="space-y-6 max-w-6xl mx-auto">
                
                {/* Section 1 */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">1. Service Description</h3>
                      <p className="text-gray-700 mb-4">
                        Health Clarified provides cloud-based revenue cycle management software and services for healthcare organizations. 
                        Our platform includes, but is not limited to, patient access services, mid-cycle management, billing and denial 
                        management, analytics, and related supporting services.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Cloud-based SaaS platform accessible via web and API</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Data processing, storage, and analytics services</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Customer support and training as specified in your agreement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Scale className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">2. Account Registration & Responsibilities</h3>
                      <p className="text-gray-700 mb-4">
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities 
                        that occur under your account.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Provide accurate and complete registration information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Maintain security of account passwords and access credentials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Notify us immediately of any unauthorized use or security breach</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Ensure authorized users comply with these Terms</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2">3. HIPAA Compliance & Business Associate Agreement</h3>
                      <p className="text-gray-700 mb-4">
                        As a Business Associate under HIPAA, Health Clarified will execute a Business Associate Agreement (BAA) 
                        with covered entities. We maintain the security and privacy of Protected Health Information (PHI) in compliance 
                        with HIPAA regulations.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>BAAs required for all clients accessing PHI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Appropriate safeguards to protect PHI as required by HIPAA</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Compliance with breach notification requirements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">4. Fees & Payment Terms</h3>
                      <p className="text-gray-700 mb-4">
                        Subscription fees are billed monthly or annually as specified in your service agreement. Payment terms 
                        and pricing are detailed in your individual agreement.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Fees are non-refundable except as specified in your agreement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Late payments may result in service suspension or termination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Fees are subject to change with 30 days' written notice</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border-2 border-red-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-900 mb-2">5. Prohibited Uses</h3>
                      <p className="text-gray-700 mb-4">
                        You agree not to use our services for any unlawful purpose or in any way that could damage, disable, 
                        or impair our platform.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Violate any applicable laws or regulations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Infringe on intellectual property rights</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Attempt to gain unauthorized access to systems or data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Introduce malware, viruses, or harmful code</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Additional Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-xl border-2 border-gray-200">
                    <FileText className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">6. Intellectual Property</h3>
                    <p className="text-gray-700 text-sm">
                      All content, features, and functionality are owned by Health Clarified. Customer retains ownership 
                      of their data. We grant you a limited license to use our platform per these Terms.
                    </p>
                  </div>

                    <div className="p-6 bg-white rounded-xl border-2 border-gray-200">
                      <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">7. Warranties & Disclaimers</h3>
                      <p className="text-gray-700 text-sm">
                        Services provided "AS IS" without warranties. We disclaim all implied warranties including merchantability, 
                        fitness for purpose, and non-infringement.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl border-2 border-gray-200">
                      <Scale className="w-8 h-8 text-green-600 mb-3" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">8. Limitation of Liability</h3>
                      <p className="text-gray-700 text-sm">
                        To the maximum extent permitted by law, our liability is limited to the amount paid by you in the 12 months 
                        prior to the claim. We are not liable for indirect, consequential, or punitive damages.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl border-2 border-gray-200">
                      <X className="w-8 h-8 text-red-600 mb-3" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">9. Termination</h3>
                      <p className="text-gray-700 text-sm">
                        Either party may terminate upon 30 days written notice. We may terminate immediately for breach of Terms. 
                        Upon termination, access to services will cease and data retention policies apply.
                      </p>
                    </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4 text-center">Important Legal Notice</h2>
              <p className="text-lg text-orange-100 mb-4">
                These Terms constitute the entire agreement between you and Health Clarified regarding our services. 
                Any modifications must be in writing and agreed upon by both parties.
              </p>
              <p className="text-lg text-orange-100">
                Questions about these Terms? Contact us at contact@healthclarified.in
              </p>
            </div>

            {/* Acceptance Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> contact@healthclarified.in</p>
                <p><strong>Address:</strong><br />
                  Business Park, Tower B, Floor 5<br />
                  Sector 125, Noida, UP 201301<br />
                  India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Legal Team</h3>
              <p className="text-gray-600">
                Have questions about our terms of service? Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent resize-none"
                    placeholder="Please describe your inquiry..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Loading Modal */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Processing Your Request</h3>
              <p className="text-gray-700">
                Please wait while we process your request...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Request Received!</h3>
              <p className="text-gray-700">
                Thank you for reaching out. We have received your legal inquiry and one of our team members will connect with you shortly.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default TermsOfService;
