import { Heart, Target, Users, TrendingUp, Shield, Award, Globe, CheckCircle } from 'lucide-react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-pink-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Health Clarified
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Our Mission to Transform Healthcare Revenue Cycle Management.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              We believe healthcare providers should focus on patient care, not paperwork. Our AI-powered platform handles the complexity of RCM.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-16">
            {/* Mission Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Health Clarified was founded with a simple mission: make revenue cycle management transparent, efficient, 
                and profitable for healthcare organizations of all sizes. We believe that healthcare providers should focus 
                on patient care, not paperwork. Our AI-powered platform handles the complexity of RCM, so you can reclaim 
                your time and maximize your revenue.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What Drives Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Transparency Above All</h3>
                      <p className="text-gray-700 mb-4">
                        We believe in complete transparency. No hidden fees, no black boxes. You see exactly where every 
                        dollar is in your revenue cycle and how long it will take to collect.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Real-time dashboards with complete visibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Transparent pricing with no hidden costs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Open communication and regular business reviews</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">Innovation & Excellence</h3>
                      <p className="text-gray-700 mb-4">
                        We never stop improving. Our team of engineers and healthcare experts continuously enhance our 
                        platform, ensuring you always have access to the latest innovations in RCM technology.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Continuous platform updates and feature releases</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Cutting-edge AI and automation technology</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Research-driven development and improvements</span>
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
                      <h3 className="text-xl font-bold text-orange-900 mb-2">Your Success is Our Success</h3>
                      <p className="text-gray-700 mb-4">
                        We're not just a vendor—we're your partner. Your revenue growth is our measure of success. 
                        Our dedicated support team ensures you achieve maximum value from our platform.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Dedicated account managers for every client</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Success metrics aligned with client outcomes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Ongoing optimization and revenue analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Security & Compliance</h3>
                      <p className="text-gray-700 mb-4">
                        Your data security is non-negotiable. We maintain the highest standards in healthcare data protection 
                        with HIPAA compliance, SOC 2 certification, and continuous security monitoring.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>HIPAA compliant with HITRUST certification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>SOC 2 Type II certified annually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Bank-level encryption and secure infrastructure</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm text-blue-100">Healthcare Organizations</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold mb-2">$2.5B+</div>
                  <div className="text-sm text-blue-100">Annual Revenue Processed</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold mb-2">50M+</div>
                  <div className="text-sm text-blue-100">Claims Processed</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-sm text-blue-100">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Story Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Founded by Healthcare Veterans</h3>
                    <p className="text-gray-700">
                      Health Clarified was founded in 2018 by a team of healthcare and technology veterans who experienced 
                      the pain points of RCM firsthand. Having worked in hospitals and clinics, they understood the inefficiencies 
                      and revenue leakage that plagued the industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Building the Future</h3>
                    <p className="text-gray-700">
                      We recognized that existing solutions were either too basic or too complex, leaving healthcare providers 
                      without a clear, intelligent solution. Our mission became clear: create an AI-powered platform that 
                      combines the best of automation with human expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Growing with You</h3>
                    <p className="text-gray-700">
                      Today, we serve hundreds of healthcare organizations across the United States, from small specialty 
                      practices to large hospital systems. Our continuous innovation and commitment to client success have 
                      helped our partners reclaim millions in revenue and regain focus on what matters most—patient care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Built on Modern Technology</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our platform is built on cloud infrastructure, leveraging cutting-edge AI and machine learning to deliver 
                exceptional results. We're committed to continuous improvement and innovation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Cloud-First</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">AI-Powered</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Real-Time</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Scalable</p>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
                Our leadership team brings decades of combined experience in healthcare, technology, and revenue cycle 
                management. We're backed by leading healthcare investors and guided by an advisory board of industry experts.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Us in Transforming Healthcare</h2>
              <p className="text-xl mb-6 text-blue-100">
                Whether you're looking to improve your revenue cycle or join our growing team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                  Contact Us
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  View Careers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
