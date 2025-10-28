import { useState } from 'react';
import { CheckCircle, Eye, Lock, FileText, UserCheck, Shield, Database, Loader2, X, Send } from 'lucide-react';

function PrivacyPolicy() {
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
      <section className="relative bg-amber-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Privacy Policy
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              How We Protect and Handle Your Data.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              We're committed to protecting your privacy and maintaining the highest standards of data protection in compliance with HIPAA, HITRUST, and other applicable regulations.
            </p>
            <div className="mt-10 flex justify-center">
              <button 
                onClick={handleContactClick}
                className="text-base font-medium text-white bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Contact Privacy Team
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
                Health Clarified ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our healthcare revenue 
                cycle management platform and services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We understand the sensitive nature of healthcare data and are committed to maintaining the highest standards 
                of data protection in compliance with HIPAA, HITRUST, and other applicable regulations.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Information We Collect</h2>
              <div className="space-y-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Database className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Protected Health Information (PHI)</h3>
                      <p className="text-gray-700 mb-4">
                        When you use our services, we process Protected Health Information as defined under HIPAA, 
                        including but not limited to:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Patient demographic information (name, date of birth, contact information)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Medical record numbers and patient identifiers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Billing and insurance information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Treatment and procedure codes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-3">Business Information</h3>
                      <p className="text-gray-700 mb-4">
                        We collect information about your healthcare organization and authorized users:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Organization name, address, and tax identification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Authorized user accounts and login credentials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Billing and payment information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Usage and system access logs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-3">Technical Information</h3>
                      <p className="text-gray-700 mb-4">
                        Automatically collected technical information to ensure secure and optimal service:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>IP addresses and device identifiers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Browser type and version</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Operating system information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Application usage and analytics data</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How We Use Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <Lock className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Revenue Cycle Management</h3>
                  <p className="text-gray-700 text-sm">
                    Process claims, verify insurance, manage denials, and handle payment posting to provide our core RCM services.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <Shield className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Security & Fraud Prevention</h3>
                  <p className="text-gray-700 text-sm">
                    Monitor for security threats, detect fraudulent activity, and maintain compliance with healthcare regulations.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <UserCheck className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Service Improvement</h3>
                  <p className="text-gray-700 text-sm">
                    Analyze usage patterns to improve platform performance, develop new features, and optimize our services.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <FileText className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Communication</h3>
                  <p className="text-gray-700 text-sm">
                    Respond to inquiries, provide support, send service updates, and communicate about billing and accounts.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Sharing & Disclosure */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Data Sharing & Disclosure</h2>
              <div className="space-y-4 max-w-6xl mx-auto">
                <p className="text-lg">
                  We do not sell, rent, or lease PHI to third parties. We may share information only in the following circumstances:
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Service Providers:</strong> With HIPAA-compliant vendors who assist in providing our services
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets (with proper notification)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>With Your Consent:</strong> When you explicitly authorize disclosure
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Data Security</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                <div className="p-6 bg-white rounded-xl border-2 border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">We implement comprehensive security measures:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Access Controls:</strong> Multi-factor authentication and role-based access control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Monitoring:</strong> 24/7 security monitoring with real-time threat detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Compliance:</strong> HIPAA compliant, SOC 2 Type II certified, and HITRUST certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Regular Audits:</strong> Annual third-party security audits and penetration testing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Your Privacy Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Access & Rectification</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    You have the right to access, review, and request corrections to your personal information and PHI.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Deletion</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    You may request deletion of your data, subject to legal and contractual obligations to retain certain records.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Restriction of Processing</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    You can request restrictions on how we process your information in certain circumstances.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Data Portability</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Request a copy of your data in a portable format for transfer to another service provider.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Questions About Our Privacy Policy?</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
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
              <h3 className="text-2xl font-bold text-gray-900">Contact Privacy Team</h3>
              <p className="text-gray-600">
                Have questions about our privacy policy? Fill out the form below and we'll get back to you shortly.
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
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
                    className="flex-1 px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
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
                Thank you for reaching out. We have received your privacy inquiry and one of our team members will connect with you shortly.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
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

export default PrivacyPolicy;
