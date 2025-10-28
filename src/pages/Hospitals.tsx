import { CheckCircle, Building2, Network, TrendingUp, ShieldCheck, Clock, Zap } from 'lucide-react';

function Hospitals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-purple-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Hospital Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Enterprise-Grade RCM for Large Healthcare Systems.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Scale with your organization, supporting multiple facilities, departments, and thousands of providers.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Enterprise Healthcare Systems</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Health Clarified scales with your organization, supporting multiple facilities, departments, and thousands of providers. 
                Our enterprise-grade platform delivers unified revenue cycle management across your entire healthcare system with the 
                reliability and security you demand.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enterprise Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Multi-Facility Management</h3>
                      <p className="text-gray-700 mb-4">
                        Centralized platform manages revenue cycle across all locations. View system-wide performance or drill down 
                        to individual facilities, departments, or providers.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Manage unlimited facilities from a single platform</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Granular role-based access control per location</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Standardized workflows across all sites</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Network className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">Department Integration</h3>
                      <p className="text-gray-700 mb-4">
                        Seamless integration across all departments—inpatient, outpatient, ED, surgery, lab, radiology, and more. 
                        Capture charges from every service point.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated charge capture from all clinical areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Real-time inventory and supply billing tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Department-specific workflow customization</span>
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
                      <h3 className="text-xl font-bold text-orange-900 mb-2">EHR Integration</h3>
                      <p className="text-gray-700 mb-4">
                        Works seamlessly with Epic, Cerner, Allscripts, Athenahealth, and more. API-first design means quick 
                        implementation—typically operational in days, not months.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>HL7 FHIR-compliant integrations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Bidirectional data exchange with EHR systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Real-time synchronization across all systems</span>
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
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Enterprise Analytics & Reporting</h3>
                      <p className="text-gray-700 mb-4">
                        System-wide dashboard with drill-down capabilities from enterprise to facility to department level. 
                        Monitor KPIs, trends, and performance metrics across your entire organization.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Executive-level dashboards and reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Predictive revenue forecasting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Customizable reports for any audience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Hospitals Choose Health Clarified</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Building2 className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Scale Without Limits</h3>
                  <p className="text-blue-100">
                    Built to handle enterprise volumes—from small community hospitals to major health systems with millions of 
                    annual charges.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <ShieldCheck className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                  <p className="text-blue-100">
                    HIPAA compliant, SOC 2 Type II certified. Bank-level encryption and audit trails meet the highest 
                    security standards.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Clock className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Rapid Implementation</h3>
                  <p className="text-blue-100">
                    Go live in weeks, not years. Our dedicated implementation team ensures smooth transitions with minimal 
                    disruption to operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Workflow Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Enterprise Deployment Process</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">System Assessment & Planning</h3>
                    <p className="text-gray-700">
                      Our team analyzes your current infrastructure, workflows, and requirements to design a customized 
                      implementation plan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Integration & Data Migration</h3>
                    <p className="text-gray-700">
                      Connect to your EHR, practice management, and billing systems. Migrate historical data with zero downtime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Training & Adoption</h3>
                    <p className="text-gray-700">
                      Comprehensive training for your team across all user roles. Dedicated support ensures smooth adoption 
                      and quick ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Go Live & Optimize</h3>
                    <p className="text-gray-700">
                      System operational across all facilities. Continuous monitoring, optimization, and support ensure peak 
                      performance and maximum revenue recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Enterprise Integrations</h2>
              <p className="text-lg text-gray-700 mb-6">
                Health Clarified integrates with the leading hospital systems and platforms.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Epic</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Cerner</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Allscripts</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Meditech</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hospital's Revenue Cycle?</h2>
              <p className="text-xl mb-6 text-blue-100">
                See how Health Clarified helps hospital systems maximize revenue and streamline operations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
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

export default Hospitals;
