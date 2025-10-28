import { CheckCircle, Stethoscope, FileCode, Award, Clock, Users, DollarSign, ClipboardCheck } from 'lucide-react';

function SpecialtyClinics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-orange-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Specialty Clinics
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              RCM Tailored for Specialty Practices.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Optimized for your specialty—from cardiology to orthopedics, our platform understands your unique coding and billing requirements.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Optimized for Your Specialty Practice</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Whether you're cardiology, orthopedics, oncology, gastroenterology, or any other specialty, Health Clarified 
                understands your unique coding and billing requirements. Our platform is configured with specialty-specific rules, 
                workflows, and automation to maximize your revenue while reducing administrative burden.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialty-Focused Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <FileCode className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Specialty-Specific Coding Rules</h3>
                      <p className="text-gray-700 mb-4">
                        Pre-configured with specialty-specific coding rules for your practice type. AI understands your 
                        procedures, diagnoses, and billing requirements to ensure accurate coding every time.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Specialty-optimized ICD-10 and CPT coding</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated modifier recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Specialty-specific compliance checks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">Advanced Procedure Coding</h3>
                      <p className="text-gray-700 mb-4">
                        Smart CPT code suggestions for complex procedures, including surgical codes, injection codes, and 
                        diagnostic procedures specific to your specialty.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Multi-procedure coding for surgical specialties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Bundling and unbundling detection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Procedure code crosswalk and validation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2">Streamlined Patient Collections</h3>
                      <p className="text-gray-700 mb-4">
                        Patient-friendly billing portal enables online payments, payment plans, and cost estimates. 
                        Improve collections while reducing staff time on billing calls.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Online patient portal for easy payments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Flexible payment plan options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated payment reminders and statements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <ClipboardCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Prior Authorization Management</h3>
                      <p className="text-gray-700 mb-4">
                        Automatically identifies services requiring prior auth and initiates the authorization process. 
                        Track status in real-time and receive alerts for expiring or pending authorizations.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated prior auth submission to payers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Centralized tracking for all auths and renewals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Prevents treatments without coverage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Specialty Practices Choose Health Clarified</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Stethoscope className="w-10 h-10 text-green-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Specialty Expertise</h3>
                  <p className="text-green-100">
                    Platform configured with coding rules, payer requirements, and workflows specifically designed for 
                    your specialty practice.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <DollarSign className="w-10 h-10 text-green-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Maximize Reimbursement</h3>
                  <p className="text-green-100">
                    Ensure every procedure, diagnosis, and modifier is coded correctly to maximize reimbursement and 
                    minimize denials.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Clock className="w-10 h-10 text-green-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Focus on Patient Care</h3>
                  <p className="text-green-100">
                    Reduce administrative burden with automation, allowing your team to focus on what matters most—providing 
                    excellent patient care.
                  </p>
                </div>
              </div>
            </div>

            {/* Workflow Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How It Works for Specialty Practices</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Appointment & Patient Setup</h3>
                    <p className="text-gray-700">
                      Patients scheduled with automatic insurance verification. Specialty-specific services and procedures 
                      identified and documented.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Prior Auth & Verification</h3>
                    <p className="text-gray-700">
                      System automatically checks for required prior authorizations, initiates auth requests when needed, 
                      and tracks approval status.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Visit & Charge Capture</h3>
                    <p className="text-gray-700">
                      Clinical services automatically captured with specialty-specific codes. AI suggests correct CPT and 
                      ICD-10 codes for physician review.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Claim Preparation & Submission</h3>
                    <p className="text-gray-700">
                      Claims are scrubbed, validated against specialty-specific rules, and submitted with maximum accuracy. 
                      High first-pass acceptance ensures faster payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Compatible with Leading Systems</h2>
              <p className="text-lg text-gray-700 mb-6">
                Works with the EHR and practice management systems specialty practices use most.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Athenahealth</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">eClinicalWorks</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Epic MyChart</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">AdvancedMD</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Specialty Practice's Revenue?</h2>
              <p className="text-xl mb-6 text-green-100">
                Experience how Health Clarified helps specialty practices maximize reimbursement and streamline operations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors shadow-lg">
                  Schedule a Demo
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SpecialtyClinics;
