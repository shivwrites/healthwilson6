import { CheckCircle, BarChart3, TrendingUp, Eye, Target, AlertCircle, FileText, Calendar } from 'lucide-react';

function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-sky-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Analytics & Reporting
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Complete Visibility into Your Revenue Cycle Performance.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Real-time dashboards, predictive analytics, and actionable insights to drive data-driven revenue cycle decisions.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#demo" className="text-base font-medium text-white bg-sky-600 hover:bg-sky-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Make Data-Driven Revenue Cycle Decisions</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Health Clarified's Analytics & Reporting platform provides real-time visibility into every aspect of your 
                revenue cycle. From executive dashboards to detailed operational reports, access the insights you need to 
                identify opportunities, optimize performance, and maximize revenue. Transform raw data into actionable intelligence 
                that drives measurable improvements.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Powerful Analytics Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Real-Time Dashboards</h3>
                      <p className="text-gray-700 mb-4">
                        Live performance metrics and KPIs updated in real-time. Monitor key performance indicators including 
                        days in A/R, denial rates, collection rates, and charge volume across your entire organization.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Interactive executive dashboards with drill-down capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Department-specific and provider-level metrics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Visual charts and graphs for easy understanding</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">Custom Report Builder</h3>
                      <p className="text-gray-700 mb-4">
                        Build reports tailored to your specific needs with our intuitive drag-and-drop report builder. 
                        Create and schedule reports for any audience—executives, managers, or operations teams.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Pre-built report templates for common needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Schedule automated report delivery via email</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Export to PDF, Excel, or CSV formats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2">Predictive Analytics</h3>
                      <p className="text-gray-700 mb-4">
                        Forecast revenue, predict cash flow, and identify trends using AI-powered predictive analytics. 
                        Make informed decisions about resource allocation and strategic planning.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Revenue forecasting based on historical patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Predictive denial risk scoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Cash flow projections and what-if scenarios</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Drill-Down Analysis</h3>
                      <p className="text-gray-700 mb-4">
                        Deep dive into operational details with interactive drill-down capabilities. Go from high-level 
                        summaries to specific claims, charges, or payments with a single click.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Click-through from summary to detailed transaction data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Multi-dimensional analysis by department, provider, payer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Identify root causes of denials and payment delays</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Analytics & Reporting Matter</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Eye className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Complete Visibility</h3>
                  <p className="text-blue-100">
                    See exactly where every dollar is in your revenue cycle. No blind spots, no surprises—just clear, 
                    actionable insights.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <AlertCircle className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Early Warning System</h3>
                  <p className="text-blue-100">
                    Identify issues before they become problems. Early alerts for trends, anomalies, and potential revenue leakage.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Target className="w-10 h-10 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Evidence-Based Decisions</h3>
                  <p className="text-blue-100">
                    Make strategic decisions backed by data, not guesswork. Demonstrate ROI and justify investments with 
                    concrete metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Metrics Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Track These Critical Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Days in A/R</div>
                  <div className="text-sm text-gray-600">Aging analysis</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-2">Collection Rate</div>
                  <div className="text-sm text-gray-600">Payment percentage</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Denial Rate</div>
                  <div className="text-sm text-gray-600">Rejection tracking</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Charge Volume</div>
                  <div className="text-sm text-gray-600">Billing activity</div>
                </div>
              </div>
            </div>

            {/* Report Types Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Pre-Built Report Library</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Executive Summary Reports</h3>
                    <p className="text-gray-700">
                      High-level revenue cycle performance metrics for C-suite and board presentations. Includes key performance 
                      indicators, trends, and strategic recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <Calendar className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Operational Reports</h3>
                    <p className="text-gray-700">
                      Detailed reports for revenue cycle managers and operations teams. Includes workflow metrics, productivity 
                      reports, and operational KPIs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <TrendingUp className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Trend Analysis Reports</h3>
                    <p className="text-gray-700">
                      Identify patterns and trends over time. Compare performance across periods to understand seasonal variations 
                      and measure improvement initiatives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-md transition-all">
                  <AlertCircle className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Exception Reports</h3>
                    <p className="text-gray-700">
                      Automated alerts and exception reports flag issues requiring attention. Unusual patterns, aging claims, 
                      and potential revenue leakage identified automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Seamless Integration</h2>
              <p className="text-lg text-gray-700 mb-6">
                Connect your analytics to the systems you already use. Export data to Excel, share via secure email, 
                or integrate with business intelligence tools.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Excel</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Power BI</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Tableau</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">API</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data into Actionable Insights?</h2>
              <p className="text-xl mb-6 text-blue-100">
                See how Health Clarified's Analytics & Reporting helps organizations make data-driven revenue cycle decisions.
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

export default Analytics;
