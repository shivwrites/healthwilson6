import { CheckCircle, Shield, Lock, Eye, FileCheck, Server, Database, UserCheck, Bell } from 'lucide-react';

function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Security
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Enterprise-Grade Security and Compliance.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              HIPAA compliant, SOC 2 Type II certified—bank-level encryption and continuous monitoring protect your sensitive data.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-slate-600 hover:bg-slate-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Request Security Documentation
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Data Security is Our Priority</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Health Clarified understands that healthcare data security isn't optional—it's foundational. We maintain the 
                highest standards in healthcare data protection with HIPAA compliance, SOC 2 Type II certification, and 
                enterprise-grade security infrastructure. Your sensitive patient information is protected by bank-level 
                encryption, continuous monitoring, and rigorous access controls.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security & Compliance Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">HIPAA Compliant & HITRUST Certified</h3>
                      <p className="text-gray-700 mb-4">
                        Full HIPAA compliance with Business Associate Agreements (BAAs) and HITRUST CSF certification. 
                        Our platform meets or exceeds all healthcare data protection requirements.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>HIPAA Business Associate Agreements (BAAs) for all clients</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>HITRUST CSF r2 Certified annually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Compliance documentation and attestations available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <FileCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">SOC 2 Type II Certified</h3>
                      <p className="text-gray-700 mb-4">
                        Annual third-party SOC 2 Type II audits verify our security, availability, processing integrity, 
                        confidentiality, and privacy controls. Reports available upon request with NDA.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Annual independent security audits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Complete audit reports available upon request</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Continuous compliance monitoring and validation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Lock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2">End-to-End Encryption</h3>
                      <p className="text-gray-700 mb-4">
                        Bank-level AES-256 encryption for data at rest and TLS 1.3 encryption for data in transit. Your 
                        PHI and financial data are protected throughout the entire workflow.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>AES-256 encryption for stored data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>TLS 1.3 encryption for data in transit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Encrypted backups with secure key management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <UserCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Access Controls & Authentication</h3>
                      <p className="text-gray-700 mb-4">
                        Multi-factor authentication (MFA), role-based access control (RBAC), and comprehensive audit logs 
                        ensure only authorized users access your data.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Multi-factor authentication (MFA) required</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Role-based access control with granular permissions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Complete audit trail of all user actions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-900 mb-2">Continuous Monitoring</h3>
                      <p className="text-gray-700 mb-4">
                        24/7 security monitoring with real-time threat detection and automated alerts. Security operations 
                        center (SOC) monitors for anomalies and potential security incidents.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Real-time security event monitoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated threat detection and response</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Annual penetration testing by third-party experts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <Database className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-indigo-900 mb-2">Data Residency & Backup</h3>
                      <p className="text-gray-700 mb-4">
                        Your data is stored in tier-1 data centers in the United States with geo-redundant backups. 
                        Regular backups ensure business continuity and disaster recovery.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>US-based data centers with multiple geographic locations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Daily encrypted backups with point-in-time recovery</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>99.9% uptime SLA guarantee</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Healthcare Organizations Trust Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Shield className="w-10 h-10 text-blue-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                  <p className="text-gray-300">
                    Zero security breaches in our operating history. Processed billions in healthcare revenue with 
                    complete data protection.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Server className="w-10 h-10 text-blue-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Enterprise Infrastructure</h3>
                  <p className="text-gray-300">
                    Built on AWS with enterprise-grade security, monitoring, and redundancy. Same infrastructure trusted 
                    by Fortune 500 companies.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Bell className="w-10 h-10 text-blue-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Transparent Reporting</h3>
                  <p className="text-gray-300">
                    Regular security briefings and compliance reports. You always know your data is secure with full 
                    visibility into our security posture.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Compliance Certifications</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">HIPAA Compliance</h3>
                    <p className="text-gray-700">Full HIPAA compliance with comprehensive Business Associate Agreements (BAAs) for all clients.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">HITRUST CSF Certified</h3>
                    <p className="text-gray-700">HITRUST CSF r2 certified demonstrating comprehensive security and compliance controls.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">SOC 2 Type II</h3>
                    <p className="text-gray-700">Annual SOC 2 Type II audits verify security, availability, processing integrity, and confidentiality controls.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Best Practices Section */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Security Commitment</h2>
              <p className="text-lg text-gray-700 mb-6">
                Security is not a destination—it's an ongoing journey. We continuously invest in security improvements, 
                training, and technology to ensure your data remains protected.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Regular employee security training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Annual third-party security audits</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Timely security patch management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Incident response and breach notification procedures</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Have Security Questions?</h2>
              <p className="text-xl mb-6 text-gray-300">
                Our security team is available to discuss our security measures, compliance certifications, and answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-gray-800 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Request Security Documentation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Security Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Security;
