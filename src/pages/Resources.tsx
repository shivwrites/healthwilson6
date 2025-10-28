import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Building2, DollarSign, Users, Award, TrendingDown, ArrowUp, Clock, Shield } from 'lucide-react';

function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-purple-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Success Stories
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Real Results from Real Healthcare Organizations
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how healthcare providers across the industry have transformed their revenue cycle 
              with Health Clarified. See measurable results and proven outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-16">
            
            {/* Featured Case Study 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Hospital System
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Regional Hospital System Increases Revenue by $8.3M Annually
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    A 350-bed regional hospital system struggled with rising denial rates and slow payment posting. 
                    After implementing Health Clarified's AI-powered revenue cycle management platform, they achieved 
                    dramatic improvements across all key metrics.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="text-2xl font-bold text-gray-900">$8.3M</span>
            </div>
                      <p className="text-sm text-gray-600">Additional Revenue</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="w-5 h-5 text-red-600" />
                        <span className="text-2xl font-bold text-gray-900">42%</span>
                      </div>
                      <p className="text-sm text-gray-600">Denial Reduction</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">28</span>
                      </div>
                      <p className="text-sm text-gray-600">Days in A/R</p>
                  </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-purple-600" />
                        <span className="text-2xl font-bold text-gray-900">95.8%</span>
                </div>
                      <p className="text-sm text-gray-600">Collection Rate</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-blue-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Automated 98% of insurance verification, reducing manual workload by 40 hours per week</span>
                      </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>AI-powered claim scrubbing caught 12,000+ potential denials before submission</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Reduced A/R from 45 to 28 days through intelligent payment acceleration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Auto-posted 85% of ERA payments, eliminating manual entry errors</span>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
                    </div>

            {/* Featured Case Study 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 border-2 border-green-200 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Multi-Specialty Practice
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Orthopedic Practice Reduces Denials by 35% in Six Months
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    A busy 12-provider orthopedic practice was losing revenue to coding errors and authorization issues. 
                    By leveraging Health Clarified's specialized RCM tools, they transformed their revenue cycle operations 
                    and recovered significant lost revenue.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="w-5 h-5 text-red-600" />
                        <span className="text-2xl font-bold text-gray-900">35%</span>
                      </div>
                      <p className="text-sm text-gray-600">Denial Reduction</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowUp className="w-5 h-5 text-green-600" />
                        <span className="text-2xl font-bold text-gray-900">$2.1M</span>
                      </div>
                      <p className="text-sm text-gray-600">Recovered Revenue</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">98.5%</span>
                      </div>
                      <p className="text-sm text-gray-600">First Pass Rate</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-purple-600" />
                        <span className="text-2xl font-bold text-gray-900">18hrs</span>
                      </div>
                      <p className="text-sm text-gray-600">Weekly Time Saved</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-green-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-green-600" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Automated prior authorization tracking reduced authorization denials by 60%</span>
                      </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>AI coding assistant improved CPT code accuracy for complex procedures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Real-time eligibility verification prevented $450K in write-offs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Patient self-service portal increased payment collection by 45%</span>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
                    </div>

            {/* Featured Case Study 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 md:p-12 border-2 border-purple-200 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    RCM Company
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Billing Company Scales to 200+ Clients Seamlessly
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    A growing RCM business needed to scale operations without compromising service quality. 
                    Health Clarified's multi-tenant platform enabled them to onboard new clients rapidly 
                    while maintaining high performance standards.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        <span className="text-2xl font-bold text-gray-900">200+</span>
                      </div>
                      <p className="text-sm text-gray-600">Clients Supported</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowUp className="w-5 h-5 text-green-600" />
                        <span className="text-2xl font-bold text-gray-900">3.5x</span>
                      </div>
                      <p className="text-sm text-gray-600">Growth Rate</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">48hrs</span>
                      </div>
                      <p className="text-sm text-gray-600">Client Onboarding</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="text-2xl font-bold text-gray-900">$45M</span>
                      </div>
                      <p className="text-sm text-gray-600">Revenue Managed</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-purple-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Reduced client onboarding time from 3 weeks to 48 hours</span>
                      </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Self-service portal allowed clients to access reports 24/7</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Automated workflows saved 120+ hours of manual work per week</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Increased client retention rate to 97% through improved visibility</span>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Collective Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$50M+</div>
                  <p className="text-gray-300">Revenue Recovered</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1,200+</div>
                  <p className="text-gray-300">Healthcare Providers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">2.1M</div>
                  <p className="text-gray-300">Claims Processed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">94%</div>
                  <p className="text-gray-300">Avg. Satisfaction</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Resources;
