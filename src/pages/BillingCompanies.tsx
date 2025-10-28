import { Link } from 'react-router-dom';
import { CheckCircle, Users, BarChart3, Zap, TrendingUp, Shield, Clock, Building2 } from 'lucide-react';

function BillingCompanies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-indigo-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Billing Companies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Scale Your RCM Business with Our Platform.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Multi-tenant platform for managing multiple clients, scale operations, and grow your business efficiently.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Growing RCM Companies</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Whether you're managing 5 clients or 500, Health Clarified's multi-tenant platform helps you scale operations, 
                improve client satisfaction, and grow your business. Our enterprise-grade infrastructure, client-specific workflows, 
                and comprehensive analytics give you the tools to deliver exceptional service at scale.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enterprise RCM Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Multi-Client Management</h3>
                      <p className="text-gray-700 mb-4">
                        Manage unlimited clients from a single platform with complete data isolation. Each client has their own 
                        workspace, configurations, and reporting while you maintain centralized control.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Unlimited clients per account</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Complete data isolation and security</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Client-specific workflows and rules</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">White-Label Client Portals</h3>
                      <p className="text-gray-700 mb-4">
                        Dedicated, customizable portals for each client with their branding. Clients see their own dashboards, 
                        reports, and performance metrics.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Fully white-label with client branding</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Real-time dashboards and reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Secure document upload and sharing</span>
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
                      <h3 className="text-xl font-bold text-orange-900 mb-2">Workload Optimization</h3>
                      <p className="text-gray-700 mb-4">
                        AI-driven task assignment and prioritization across all clients. Balance workloads automatically, 
                        route high-priority claims first, and ensure nothing falls through the cracks.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Intelligent claim routing based on priority</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated workload balancing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Performance tracking per staff member</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Cross-Client Analytics</h3>
                      <p className="text-gray-700 mb-4">
                        Track performance across all clients with aggregated reporting. Identify trends, benchmark performance, 
                        and make data-driven decisions for your business.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Aggregated revenue and denial metrics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Client performance benchmarking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Customizable executive reports</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Why RCM Companies Choose Health Clarified</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <TrendingUp className="w-10 h-10 text-indigo-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Scale Without Constraints</h3>
                  <p className="text-indigo-100">
                    Add unlimited clients without infrastructure concerns. Cloud-based platform automatically scales with your business.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Building2 className="w-10 h-10 text-indigo-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Differentiate Your Service</h3>
                  <p className="text-indigo-100">
                    Superior technology and automation help you deliver better results than competitors. Become the preferred choice for practices.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Clock className="w-10 h-10 text-indigo-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Operational Efficiency</h3>
                  <p className="text-indigo-100">
                    Reduce manual work, minimize errors, and increase throughput. More clients, fewer staff hours, better margins.
                  </p>
                </div>
              </div>
            </div>

            {/* Workflow Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">RCM Company Workflow</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Client Onboarding</h3>
                    <p className="text-gray-700">
                      Quickly onboard new clients with their EHR, payer mix, and specific requirements. System auto-configures 
                      workflows and rules for each client.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Automated Claims Processing</h3>
                    <p className="text-gray-700">
                      Claims flow in automatically from client EHRs. AI-powered scrubbing and validation happen before human review, 
                      catching errors early and accelerating processing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Denial Prevention & Management</h3>
                    <p className="text-gray-700">
                      Intelligent denial prevention catches issues before submission. Automated denial analysis and rework workflows 
                      help resolve issues quickly across all clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Client Reporting & Insights</h3>
                    <p className="text-gray-700">
                      Clients access real-time dashboards showing their revenue cycle performance. Automated reports sent regularly 
                      keep them informed and demonstrate your value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Integrate with Client Systems</h2>
              <p className="text-lg text-gray-700 mb-6">
                Connect to any EHR, practice management, or clearinghouse system your clients use.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Epic</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Cerner</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Athenahealth</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">All EHRs</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Scale Your RCM Business?</h2>
              <p className="text-xl mb-6 text-indigo-100">
                Discover how Health Clarified helps RCM companies grow efficiently and deliver exceptional client service.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/book-demo" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg text-center">
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

export default BillingCompanies;
