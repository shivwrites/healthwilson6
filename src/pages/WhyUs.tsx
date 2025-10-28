import { CheckCircle, Brain, TrendingUp, Shield, HeadphonesIcon, Zap, Award, Clock, BarChart3, Target } from 'lucide-react';

function WhyUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-teal-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Health Clarified?
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              The Clear Choice in Revenue Cycle Management.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              AI-powered automation with human expertise to deliver results that matter—faster payments, fewer denials, and complete transparency.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Clear Choice in Revenue Cycle Management</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Health Clarified isn't just another RCM platform. We combine AI-powered automation with human expertise to deliver 
                results that matter—faster payments, fewer denials, and complete transparency. Our proven platform has helped 
                healthcare organizations reclaim millions in revenue while reducing administrative burden.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes Us Different</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">AI-Powered Intelligence</h3>
                      <p className="text-gray-700 mb-4">
                        Our "Clarity" AI engine learns from millions of claims to catch errors before they become denials. 
                        Continuously improving accuracy through machine learning and real-world outcomes.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Predictive denial prevention with 94% accuracy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Automated coding suggestions for complex procedures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Continuous learning from claim outcomes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">Proven Results</h3>
                      <p className="text-gray-700 mb-4">
                        96.9% first-pass acceptance rate. 30% faster payments. 22% reduction in denials. These aren't just 
                        numbers—they're our clients' reality.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Average of $2.3M additional revenue per client annually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Days in A/R reduced by 8-12 days on average</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>99.7% system uptime guarantee</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2">Enterprise-Grade Security</h3>
                      <p className="text-gray-700 mb-4">
                        HIPAA compliant, SOC 2 Type II certified with bank-level encryption. Your data is secure—always. 
                        Regular security audits and penetration testing ensure continuous protection.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>End-to-end encryption for all data in transit and at rest</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Regular third-party security audits and compliance checks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Comprehensive audit trails and access controls</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <HeadphonesIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Dedicated Support</h3>
                      <p className="text-gray-700 mb-4">
                        Real people who understand healthcare. Expert RCM specialists ready to help with onboarding, training, 
                        and ongoing optimization.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Dedicated account manager for each client</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>24/7 support with average response time under 2 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Regular business reviews and optimization sessions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">More Reasons to Choose Health Clarified</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Zap className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Rapid Implementation</h3>
                  <p className="text-blue-100">
                    Go live in weeks, not months. Our streamlined onboarding process gets you operational quickly with minimal 
                    disruption to your workflow.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <BarChart3 className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Complete Transparency</h3>
                  <p className="text-blue-100">
                    Real-time dashboards show exactly where every claim is in your revenue cycle. No black boxes—just clear, 
                    actionable insights.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Target className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Customizable Solutions</h3>
                  <p className="text-blue-100">
                    Every practice is unique. Our platform adapts to your workflows, not the other way around. Flexible 
                    configuration for your specific needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Results That Matter</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">96.9%</div>
                  <div className="text-sm font-semibold text-gray-700">First-Pass Acceptance</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                  <div className="text-sm font-semibold text-gray-700">Faster Payments</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">22%</div>
                  <div className="text-sm font-semibold text-gray-700">Reduction in Denials</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">$2.3M</div>
                  <div className="text-sm font-semibold text-gray-700">Avg Annual Revenue Gain</div>
                </div>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Award key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Health Clarified transformed our revenue cycle. We're seeing faster payments, fewer denials, and complete 
                    visibility into our entire process. The platform is intuitive, the support is exceptional, and the results 
                    speak for themselves. It's been a game-changer for our practice."
                  </p>
                  <p className="font-semibold text-gray-900">John Davis</p>
                  <p className="text-sm text-gray-600">Chief Financial Officer, Northeast Medical Group</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
              <p className="text-xl mb-6 text-blue-100">
                See why healthcare organizations choose Health Clarified for their revenue cycle management.
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

export default WhyUs;
