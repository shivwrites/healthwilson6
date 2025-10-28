import { FileText, Download, Video, BookOpen, BarChart3, Users, TrendingUp, Lightbulb, CheckCircle, MessageCircle } from 'lucide-react';

function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-cyan-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Tools, Guides, and Insights for Revenue Cycle Excellence.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Access comprehensive resources to help you optimize your revenue cycle and stay ahead of industry trends.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Explore Resources
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Expand Your RCM Knowledge</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Access comprehensive resources designed to help you optimize your revenue cycle. From in-depth case studies 
                to expert webinars, our collection provides actionable insights and best practices from industry leaders.
              </p>
            </div>

            {/* Main Resources */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Case Studies</h3>
                      <p className="text-gray-700 mb-4">
                        Real-world success stories from healthcare organizations using Health Clarified. Learn how they 
                        achieved significant revenue improvements and operational efficiencies.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Hospital system increases revenue by $8.3M annually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Specialty practice reduces denials by 35%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>RCM company scales to 200+ clients seamlessly</span>
                        </li>
                      </ul>
                      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                        Read Case Studies →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">White Papers & Guides</h3>
                      <p className="text-gray-700 mb-4">
                        In-depth research and analysis on RCM trends, best practices, and industry insights. Download 
                        comprehensive guides to transform your revenue cycle.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>The Future of AI in Revenue Cycle Management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Denial Prevention Playbook</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>HIPAA Compliance Checklist for RCM</span>
                        </li>
                      </ul>
                      <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                        Download Resources →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Video className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2">Webinars & Training</h3>
                      <p className="text-gray-700 mb-4">
                        Live and on-demand sessions with RCM experts. Learn best practices, advanced techniques, and 
                        stay current with evolving industry standards.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Monthly live sessions with Q&A</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>On-demand video library with 200+ sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>CPE credits available for select courses</span>
                        </li>
                      </ul>
                      <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                        Watch Webinars →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Blog & Insights</h3>
                      <p className="text-gray-700 mb-4">
                        Stay updated with the latest trends, tips, and best practices in revenue cycle management. 
                        Practical insights you can implement immediately.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Weekly articles on RCM best practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Industry news and regulatory updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Product updates and feature spotlights</span>
                        </li>
                      </ul>
                      <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                        Read Blog →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Access Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Quick Access Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <BarChart3 className="w-12 h-12 mx-auto mb-3 text-blue-300" />
                  <h3 className="font-bold mb-2">ROI Calculator</h3>
                  <p className="text-sm text-gray-300">Calculate your potential savings</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <Download className="w-12 h-12 mx-auto mb-3 text-green-300" />
                  <h3 className="font-bold mb-2">Downloads</h3>
                  <p className="text-sm text-gray-300">Templates and tools</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <Users className="w-12 h-12 mx-auto mb-3 text-orange-300" />
                  <h3 className="font-bold mb-2">Community</h3>
                  <p className="text-sm text-gray-300">Connect with peers</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-purple-300" />
                  <h3 className="font-bold mb-2">Trends</h3>
                  <p className="text-sm text-gray-300">Industry analysis</p>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Stay Informed</h2>
                  <p className="text-gray-700 mb-4">
                    Get the latest insights, case studies, and best practices delivered to your inbox monthly. 
                    Join thousands of healthcare leaders staying ahead of RCM trends.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
              <p className="text-xl mb-6 text-blue-100">
                Our team is ready to help you find the resources you need and answer any questions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                  Contact Us
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Request a Resource
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Resources;
