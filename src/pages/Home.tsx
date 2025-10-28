import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Clock, Info, Edit, Smartphone, Zap, EyeOff } from 'lucide-react';

function Home() {
  const scrollyTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollyUiRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Scroll-triggered animations
    const animatedElements = document.querySelectorAll('[data-animate]');

    const animateObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          // Count-up animation
          const countUpElements = entry.target.querySelectorAll('.count-up');
          countUpElements.forEach(el => {
            const target = +(el.getAttribute('data-target') || 0);
            animateCountUp(el as HTMLElement, target);
          });

          animateObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
      animateObserver.observe(el);
    });

    // Scrolly-telling observer
    const scrollyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('data-step');
        const correspondingTextIndex = parseInt(id || '0') - 1;

        if (entry.isIntersecting) {
          scrollyTextRefs.current.forEach(el => el?.classList.remove('active'));
          scrollyTextRefs.current[correspondingTextIndex]?.classList.add('active');
          entry.target.classList.add('active');
        } else {
          scrollyTextRefs.current[correspondingTextIndex]?.classList.remove('active');
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.5 });

    scrollyUiRefs.current.forEach(el => {
      if (el) scrollyObserver.observe(el);
    });

    // Set initial active state
    setTimeout(() => {
      scrollyTextRefs.current[0]?.classList.add('active');
      scrollyUiRefs.current[0]?.classList.add('active');
    }, 300);

    return () => {
      animateObserver.disconnect();
      scrollyObserver.disconnect();
    };
  }, []);

  function animateCountUp(el: HTMLElement, target: number) {
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        start = target;
      }
      el.textContent = Math.floor(start) + (el.textContent?.includes('%') ? '%' : '');
    }, stepTime);
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-24 sm:pt-20 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-50"></div>

          {/* Wave Animation */}
          <div className="wave-container">
            <svg className="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(59, 130, 246, 0.05)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg className="wave wave-2" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(34, 197, 94, 0.04)" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,144C672,149,768,203,864,208C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-blue-100 mb-6" data-animate="fade-in">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">AI-Powered Revenue Cycle Management</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8" data-animate="slide-in-up">
                Transform Your Revenue Cycle with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Intelligent Automation</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto" data-animate="slide-in-up" style={{transitionDelay: '0.1s'}}>
                Prevent denials before they happen, accelerate payments by 30%, and gain complete visibility into your financial operations.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10" data-animate="slide-in-up" style={{transitionDelay: '0.2s'}}>
                <Link to="/book-demo" className="w-full sm:w-auto text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl pulse-cta">
                  Schedule a Demo
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600" data-animate="fade-in" style={{transitionDelay: '0.3s'}}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Setup in 72 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Free migration support</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto" data-animate="fade-in" style={{transitionDelay: '0.4s'}}>
              <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-gray-900">96.9%</div>
                    <div className="text-xs font-medium text-gray-500">First Pass Rate</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Industry-leading clean claim submission rate</p>
              </div>

              <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-gray-900">30%</div>
                    <div className="text-xs font-medium text-gray-500">Faster Payments</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Average reduction in payment cycle time</p>
              </div>

              <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-gray-900">31</div>
                    <div className="text-xs font-medium text-gray-500">Days in A/R</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Average accounts receivable turnover time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Security & Compliance Badges */}
            <div className="text-center mb-12" data-animate="fade-in">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Enterprise-Grade Security & Compliance
              </p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow" data-animate="slide-in-up" style={{transitionDelay: '0.1s'}}>
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900">HIPAA Compliant</p>
                    <p className="text-xs text-gray-500">Full PHI Protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow" data-animate="slide-in-up" style={{transitionDelay: '0.2s'}}>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900">SOC 2 Type II</p>
                    <p className="text-xs text-gray-500">Audited Security</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow" data-animate="slide-in-up" style={{transitionDelay: '0.3s'}}>
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900">HL7 FHIR</p>
                    <p className="text-xs text-gray-500">Standards Compliant</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4" data-animate="fade-in">
              The Healthcare RCM Crisis
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight" data-animate="slide-in-up">
              Your Revenue Cycle is <span className="text-red-600">Leaking</span>—And It's Costing You.
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed" data-animate="slide-in-up" style={{transitionDelay: '0.2s'}}>
              Fragmented systems, manual errors, and endless denials mean you're fighting for money you've already earned.
            </p>
          </div>

          <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group" data-animate="slide-in-up" style={{transitionDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-red-100 group-hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-5xl font-extrabold text-red-600 count-up" data-target="20">0%</h3>
                <p className="mt-3 text-xl font-bold text-gray-900">High Denial Rates</p>
                <p className="mt-3 text-gray-600 leading-relaxed">The industry average. Your staff is buried in manual, reactive work, chasing down payments instead of focusing on care.</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-medium">That's $1 in every $5 at risk</p>
                </div>
              </div>
            </div>

            <div className="relative group" data-animate="slide-in-up" style={{transitionDelay: '0.4s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-amber-100 group-hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-5xl font-extrabold text-amber-600">
                  <span className="count-up" data-target="45">0</span>
                </h3>
                <p className="mt-3 text-xl font-bold text-gray-900">Days in A/R</p>
                <p className="mt-3 text-gray-600 leading-relaxed">Complex billing and slow patient payments create a financial bottleneck, straining operations and limiting growth.</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-medium">Cash flow delays hurt your bottom line</p>
                </div>
              </div>
            </div>

            <div className="relative group" data-animate="slide-in-up" style={{transitionDelay: '0.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-purple-200 group-hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                  <EyeOff className="w-8 h-8" />
                </div>
                <div className="mt-6 text-5xl font-extrabold text-gray-700 invisible">0</div>
                <p className="mt-3 text-xl font-bold text-gray-900">Zero Transparency</p>
                <p className="mt-3 text-gray-600 leading-relaxed">You're flying blind. Fragmented systems can't tell you why you're losing money or how to fix it—until it's too late.</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-medium">No visibility means no control</p>
                </div>
              </div>
            </div>
          </div>

          {/* Added Visual Separator */}
          <div className="mt-8 max-w-2xl mx-auto text-center" data-animate="fade-in">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 bg-gray-50 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  There's a better way
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (Scrolly-telling) */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4" data-animate="fade-in">
              The Health Clarified Difference
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight" data-animate="slide-in-up">
              The Proactive RCM Platform. <span className="text-blue-600">Powered by AI.</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed" data-animate="slide-in-up" style={{transitionDelay: '0.2s'}}>
              Health Clarified shifts your team from reactive problem-solving to proactive revenue protection.
            </p>
          </div>

          <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky top-24 self-start" data-animate="slide-in-left">
              <div className="space-y-16 flex flex-col min-h-[500px]">
                <div ref={el => scrollyTextRefs.current[0] = el} className="scrolly-text p-8 rounded-2xl flex-shrink-0 min-h-[500px] flex flex-col justify-center" data-step="1">
                  <div className="inline-flex items-center gap-1.5 mb-4">
                    <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                    <span className="text-xs font-semibold text-red-700 px-2 py-0.5 bg-red-100 rounded-full">PREVENT DENIALS</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 transition-all duration-300">Prevent 90% of Denials Before Submission</h3>
                  <p className="mt-4 text-lg text-gray-600 transition-all duration-300 leading-relaxed">Our "Clarity" AI Engine scrubs 100% of claims before submission, catching coding errors, missing modifiers, and payer-specific issues in real-time. Stop denials before they happen.</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Real-time payer rule validation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Automated coding compliance checks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Smart modifier recommendations</span>
                    </li>
                  </ul>
                </div>
                <div ref={el => scrollyTextRefs.current[1] = el} className="scrolly-text p-8 rounded-2xl flex-shrink-0 min-h-[500px] flex flex-col justify-center" data-step="2">
                  <div className="inline-flex items-center gap-1.5 mb-4">
                    <Zap className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-700 px-2 py-0.5 bg-blue-100 rounded-full">AUTOMATION</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 transition-all duration-300">Automate the Busywork, Eliminate Errors</h3>
                  <p className="mt-4 text-lg text-gray-600 transition-all duration-300 leading-relaxed">Automate eligibility checks, charge capture, and payment posting. Free your team to focus on high-value tasks and complex cases that need human expertise.</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">24/7 automated eligibility verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Smart payment posting with auto-reconciliation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Intelligent charge capture workflows</span>
                    </li>
                  </ul>
                </div>
                <div ref={el => scrollyTextRefs.current[2] = el} className="scrolly-text p-8 rounded-2xl flex-shrink-0 min-h-[500px] flex flex-col justify-center" data-step="3">
                  <div className="inline-flex items-center gap-1.5 mb-4">
                    <Info className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-xs font-semibold text-green-700 px-2 py-0.5 bg-green-100 rounded-full">TRANSPARENCY</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 transition-all duration-300">Get a Single Source of Truth</h3>
                  <p className="mt-4 text-lg text-gray-600 transition-all duration-300 leading-relaxed">Our real-time dashboard gives you a complete, drill-down view of your A/R, denial rates, and staff productivity. Make data-driven decisions with confidence.</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Real-time financial performance metrics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Customizable reporting and analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Predictive revenue forecasting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col space-y-16" data-animate="slide-in-right">
              <div ref={el => scrollyUiRefs.current[0] = el} data-step="1" className="scrolly-ui h-auto min-h-[500px] flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 border-2 border-gray-200">
                <div className="scrolly-ui-content w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">AI Claim Scrubber</p>
                      <p className="text-sm text-gray-500">Live validation for CPT 99214</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-5 bg-green-50 border-2 border-green-200 rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-semibold">Payer: Aetna PPO</span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-full text-sm font-bold">
                          <CheckCircle className="w-4 h-4" />
                          PASSED
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">All requirements met • Est. reimbursement: $118.50</p>
                    </div>
                    <div className="p-5 bg-red-50 border-2 border-red-300 rounded-xl shadow-lg animate-pulse-slow">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-red-800 font-bold">Payer: Cigna HMO</span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded-full text-sm font-bold">
                          <AlertCircle className="w-4 h-4" />
                          FLAGGED
                        </span>
                      </div>
                      <div className="mt-4 p-4 bg-white rounded-lg border border-red-200">
                        <p className="text-sm font-semibold text-red-900 mb-2">⚠️ High Denial Risk Detected</p>
                        <p className="text-sm text-gray-700"><span className="font-bold text-blue-600">AI Suggestion:</span> Missing Modifier 25 for E/M service on the same day as a procedure. Add modifier to ensure reimbursement.</p>
                        <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                          Apply Fix Automatically
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={el => scrollyUiRefs.current[1] = el} data-step="2" className="scrolly-ui h-auto min-h-[500px] flex items-center justify-center bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 border-2 border-blue-200">
                <div className="scrolly-ui-content w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Automation Hub</p>
                      <p className="text-sm text-gray-500">Today's workflow status</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Eligibility Verification</p>
                        <p className="text-sm text-gray-600 mt-1">Batch of 214 patients completed</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Payment Auto-Posting</p>
                        <p className="text-sm text-gray-600 mt-1">ERA from Aetna: <span className="font-bold text-green-600">$89,120.50</span> posted</p>
                        <p className="text-xs text-gray-500 mt-1">42 claims reconciled • 0 exceptions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-300 shadow-sm">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Charge Capture Review</p>
                        <p className="text-sm text-gray-600 mt-1">Dr. Smith - 2 charges need review</p>
                        <button className="mt-2 text-sm font-semibold text-blue-600 hover:text-blue-700">Review Now →</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={el => scrollyUiRefs.current[2] = el} data-step="3" className="scrolly-ui h-auto min-h-[500px] flex items-center justify-center bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl p-8 border-2 border-green-200">
                <div className="scrolly-ui-content w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Info className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Analytics Dashboard</p>
                      <p className="text-sm text-gray-500">Real-time financial performance</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-500 font-medium">Days in A/R</span>
                      </div>
                      <p className="text-4xl font-bold text-gray-900">31.2</p>
                      <p className="text-xs text-green-600 font-semibold mt-1">↓ 24% vs last month</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-500 font-medium">Denial Rate</span>
                      </div>
                      <p className="text-4xl font-bold text-red-600">3.1%</p>
                      <p className="text-xs text-green-600 font-semibold mt-1">↓ 18% vs last month</p>
                    </div>
                    <div className="col-span-2 bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-300 shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-green-800 font-bold">First Pass Acceptance</span>
                      </div>
                      <p className="text-5xl font-extrabold text-green-700">96.9%</p>
                      <div className="w-full bg-green-200 rounded-full h-3 mt-3">
                        <div className="bg-green-600 h-3 rounded-full shadow-sm" style={{width: '96.9%', transition: 'width 1.5s ease-out'}}></div>
                      </div>
                      <p className="text-sm text-green-700 font-semibold mt-2">Industry average: 75% • You're outperforming by 22%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4" data-animate="fade-in">
              Complete RCM Ecosystem
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight" data-animate="slide-in-up">
              Not Just Software. <span className="text-blue-600">A Complete Solution.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600" data-animate="slide-in-up" style={{transitionDelay: '0.2s'}}>
              Everything you need to transform your revenue cycle, all in one platform
            </p>
          </div>
          <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative" data-animate="slide-in-up" style={{transitionDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 group-hover:border-blue-200 transition-all duration-300 h-full">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Edit className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">AI-Assisted Coding</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">Our NLP engine scans clinical notes to suggest the most accurate ICD-10 and CPT codes, reducing coder guesswork and improving compliance.</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link to="/platform/mid-cycle" className="flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative" data-animate="slide-in-up" style={{transitionDelay: '0.4s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 group-hover:border-green-200 transition-all duration-300 h-full">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Patient-Friendly Billing</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">A simple, modern portal for patients to see cost estimates, set up flexible payment plans, and pay online with just a few clicks.</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link to="/platform/patient-access" className="flex items-center gap-2 text-sm font-semibold text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative" data-animate="slide-in-up" style={{transitionDelay: '0.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 group-hover:border-orange-200 transition-all duration-300 h-full">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Seamless EHR Integration</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">API-first design connects to Epic, Cerner, Athenahealth, and more in days, not months. Start seeing results immediately.</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link to="/platform/analytics" className="flex items-center gap-2 text-sm font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 Q50,20 100,0 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4" data-animate="fade-in">
              Customer Success Stories
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight" data-animate="slide-in-up">
              The Clear Choice for <span className="text-blue-200">Financial Health</span>
            </h2>
            <p className="mt-4 text-lg text-blue-100" data-animate="slide-in-up" style={{transitionDelay: '0.2s'}}>
              Real results from real healthcare organizations
            </p>
          </div>
          <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group" data-animate="slide-in-left">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl italic text-white leading-relaxed mb-6">"Health Clarified reduced our denial rate by 22% in just 90 days. It's become the brain of our entire financial operations."</p>
                <div className="flex items-center pt-6 border-t border-white/20">
                  <img className="h-14 w-14 rounded-full ring-4 ring-white/30" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=100&h=100&fit=crop" alt="CFO" />
                  <div className="ml-4">
                    <p className="font-bold text-white text-lg">John A. Smith</p>
                    <p className="text-blue-200 text-sm">CFO, Memorial Hospital System</p>
                    <p className="text-blue-300 text-xs mt-1">450-bed regional healthcare network</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group" data-animate="slide-in-right">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl italic text-white leading-relaxed mb-6">"We cut our administrative billing time in half. Our staff is happier, our patients have a better experience, and our cash flow has never been stronger."</p>
                <div className="flex items-center pt-6 border-t border-white/20">
                  <img className="h-14 w-14 rounded-full ring-4 ring-white/30" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100&h=100&fit=crop" alt="Practice Manager" />
                  <div className="ml-4">
                    <p className="font-bold text-white text-lg">Sarah Jenkins</p>
                    <p className="text-blue-200 text-sm">Practice Manager, Summit Orthopedics</p>
                    <p className="text-blue-300 text-xs mt-1">Multi-specialty practice, 40+ providers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 max-w-5xl mx-auto" data-animate="fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-blue-200">Healthcare Organizations</div>
              </div>
              <div className="text-center border-l border-white/20">
                <div className="text-4xl font-bold text-white mb-2">$2.5B+</div>
                <div className="text-sm text-blue-200">Revenue Processed</div>
              </div>
              <div className="text-center border-l border-white/20">
                <div className="text-4xl font-bold text-white mb-2">96.9%</div>
                <div className="text-sm text-blue-200">Avg. Clean Claim Rate</div>
              </div>
              <div className="text-center border-l border-white/20">
                <div className="text-4xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-sm text-blue-200">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50 p-12 sm:p-16 rounded-3xl shadow-2xl border border-blue-100" data-animate="fade-in">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-700">Limited Time: Free Revenue Analysis</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                  Stop Leaving Money <span className="text-blue-600">on the Table.</span>
                </h2>
                <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  See exactly how much revenue Health Clarified can recover for you. Get a personalized, no-obligation demo with an RCM specialist today.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Link to="/book-demo" className="w-full sm:w-auto text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl inline-flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl pulse-cta">
                    <span>Schedule a Demo</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link to="/login" className="w-full sm:w-auto text-lg font-semibold text-blue-600 bg-white hover:bg-gray-50 px-10 py-4 rounded-xl transition-all border-2 border-blue-200 shadow-sm hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                    <span>Sign Up</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm max-w-4xl mx-auto">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">Quick Setup</p>
                        <p className="text-gray-600">Go live in days, not months</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">Expert Support</p>
                        <p className="text-gray-600">Dedicated RCM specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">Proven Results</p>
                        <p className="text-gray-600">30% faster payments avg.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
