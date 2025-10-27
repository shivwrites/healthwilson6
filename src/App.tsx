import { useEffect, useRef, useState } from 'react';
import { Menu, X, CheckCircle, AlertCircle, Clock, Info, Edit, Smartphone, Zap } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-blue-600">Healthclarified</a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-gray-600 hover:text-blue-600 transition-colors py-2 rounded-md text-sm font-medium">Platform</button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Patient Access</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mid-Cycle</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Billing & Denials</a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-600 hover:text-blue-600 transition-colors py-2 rounded-md text-sm font-medium">Solutions</button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hospitals</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Specialty Clinics</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Billing Companies</a>
                </div>
              </div>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2 rounded-md text-sm font-medium">Why Us?</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2 rounded-md text-sm font-medium">Resources</a>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Client Login</a>
              <a href="#demo" className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all">Book a Demo</a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden shadow-lg border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Patient Access</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Mid-Cycle</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Billing & Denials</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Solutions</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Why Us?</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Resources</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col items-start px-5 space-y-3">
                <a href="#demo" className="w-full text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all">Book a Demo</a>
                <a href="#" className="w-full text-center text-base font-medium text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">Client Login</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight" data-animate="slide-in-up">
              Stop Revenue Leakage. Get Paid 30% Faster.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600" data-animate="slide-in-up" style={{transitionDelay: '0.2s'}}>
              Healthclarified is the unified AI platform that prevents denials, automates your billing cycle, and gives you a clear, real-time view of your financial health.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#demo" className="w-full sm:w-auto text-base font-medium text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl pulse-cta" data-animate="slide-in-up" style={{transitionDelay: '0.4s'}}>
                Book Your Personalized Demo
              </a>
              <a href="#" className="w-full sm:w-auto text-base font-medium text-blue-600 bg-white hover:bg-blue-50 px-8 py-3 rounded-lg transition-all border border-blue-200 shadow-sm hover:shadow-md" data-animate="slide-in-up" style={{transitionDelay: '0.5s'}}>
                See 2-Min Platform Tour
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <svg className="w-[72rem] h-[72rem] text-blue-50 opacity-60" fill="currentColor" viewBox="0 0 1024 1024">
              <circle cx="512" cy="512" r="512" />
            </svg>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-sm font-semibold text-gray-500" data-animate="fade-in">
              Trusted by leading healthcare systems and billing partners
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
              {['HIPAA Compliant', 'SOC 2 Certified', 'Athenahealth', 'Epic Partner'].map((text, i) => (
                <div key={i} className="flex justify-center" data-animate="slide-in-up" style={{transitionDelay: `${0.1 * (i + 1)}s`}}>
                  <img className="h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" src={`https://placehold.co/150x40/9ca3af/ffffff?text=${encodeURIComponent(text)}&font=inter`} alt={text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" data-animate="slide-in-up">
              Your Revenue Cycle is Leaking—And It's Costing You.
            </h2>
            <p className="mt-4 text-lg text-gray-600" data-animate="slide-in-up" style={{transitionDelay: '0.2s'}}>
              Fragmented systems, manual errors, and endless denials mean you're fighting for money you've already earned.
            </p>
          </div>

          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-animate="slide-in-up" style={{transitionDelay: '0.3s'}}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-4xl font-bold text-red-600 count-up" data-target="20">0%</h3>
              <p className="mt-2 text-lg font-semibold text-gray-900">High Denial Rates</p>
              <p className="mt-2 text-gray-600">The industry average. Your staff is buried in manual, reactive work, chasing down payments.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-animate="slide-in-up" style={{transitionDelay: '0.4s'}}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-4xl font-bold text-yellow-600">
                <span className="count-up" data-target="45">0</span>+ Days in A/R
              </h3>
              <p className="mt-2 text-lg font-semibold text-gray-900">Delayed Cash Flow</p>
              <p className="mt-2 text-gray-600">Complex billing and slow patient payments create a financial bottleneck, straining operations.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-animate="slide-in-up" style={{transitionDelay: '0.5s'}}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-4xl font-bold text-blue-600">No</h3>
              <p className="mt-2 text-lg font-semibold text-gray-900">Lack of Transparency</p>
              <p className="mt-2 text-gray-600">You're flying blind. Fragmented systems can't tell you *why* you're losing money or how to fix it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (Scrolly-telling) */}
      <section className="py-20 sm:py-28 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" data-animate="slide-in-up">
              The Proactive RCM Platform. Powered by AI.
            </h2>
            <p className="mt-4 text-lg text-gray-600" data-animate="slide-in-up" style={{transitionDelay: '0.2s'}}>
              Healthclarified shifts your team from reactive problem-solving to proactive revenue protection.
            </p>
          </div>

          <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="lg:sticky top-24 h-full" data-animate="slide-in-left">
              <div className="space-y-12">
                <div ref={el => scrollyTextRefs.current[0] = el} className="scrolly-text" data-step="1">
                  <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300">Prevent 90% of Denials</h3>
                  <p className="mt-2 text-lg text-gray-600 transition-all duration-300">Our "Clarity" AI Engine scrubs 100% of claims *before* submission, catching coding errors, missing modifiers, and payer-specific issues in real-time.</p>
                </div>
                <div ref={el => scrollyTextRefs.current[1] = el} className="scrolly-text" data-step="2">
                  <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300">Automate the Busywork</h3>
                  <p className="mt-2 text-lg text-gray-600 transition-all duration-300">Automate eligibility checks, charge capture, and payment posting. Free your team to focus on high-value tasks and complex cases.</p>
                </div>
                <div ref={el => scrollyTextRefs.current[2] = el} className="scrolly-text" data-step="3">
                  <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300">Get a Single Source of Truth</h3>
                  <p className="mt-2 text-lg text-gray-600 transition-all duration-300">Our real-time dashboard gives you a complete, drill-down view of your A/R, denial rates, and staff productivity. No more spreadsheets.</p>
                </div>
              </div>
            </div>

            <div className="relative space-y-16" data-animate="slide-in-right">
              <div ref={el => scrollyUiRefs.current[0] = el} data-step="1" className="scrolly-ui h-96 flex items-center justify-center bg-white rounded-lg shadow-xl p-6 border border-gray-200">
                <div className="scrolly-ui-content w-full">
                  <p className="font-semibold text-gray-700">Claim Scrubber: CPT 99214</p>
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Payer: Aetna</span>
                      <span className="text-green-600 font-medium">PASSED</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-red-700 font-semibold">Payer: Cigna - DENIAL RISK</span>
                      <span className="text-red-600 font-medium">FLAGGED</span>
                    </div>
                    <p className="mt-2 text-sm text-red-700"><b>AI Suggestion:</b> Missing Modifier 25 for E/M service on the same day as a procedure.</p>
                  </div>
                </div>
              </div>

              <div ref={el => scrollyUiRefs.current[1] = el} data-step="2" className="scrolly-ui h-96 flex items-center justify-center bg-white rounded-lg shadow-xl p-6 border border-gray-200">
                <div className="scrolly-ui-content w-full">
                  <p className="font-semibold text-gray-700">Automation Dashboard</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">Eligibility Batch (214 Patients) - <b>Completed</b></span>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">ERA Auto-Post (Aetna) - <b>Posted $89,120</b></span>
                    </div>
                    <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-gray-700">Charge Capture (Dr. Smith) - <b>Review (2 Missing)</b></span>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={el => scrollyUiRefs.current[2] = el} data-step="3" className="scrolly-ui h-96 flex items-center justify-center bg-white rounded-lg shadow-xl p-6 border border-gray-200">
                <div className="scrolly-ui-content w-full">
                  <p className="font-semibold text-gray-700">RCM Dashboard</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Days in A/R</span>
                      <p className="text-2xl font-bold text-gray-900">31.2</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Denial Rate</span>
                      <p className="text-2xl font-bold text-red-600">3.1%</p>
                    </div>
                    <div className="col-span-2 bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-500">First Pass Acceptance</span>
                      <p className="text-2xl font-bold text-green-600">96.9%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{width: '96.9%', transition: 'width 1s ease-out'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" data-animate="slide-in-up">
              Not Just Software. A Complete RCM Ecosystem.
            </h2>
          </div>
          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300" data-animate="slide-in-up" style={{transitionDelay: '0.3s'}}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                <Edit className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">AI-Assisted Coding (NLP)</h3>
              <p className="mt-2 text-gray-600">Our NLP scans clinical notes to suggest the most accurate ICD-10 and CPT codes, reducing coder guesswork.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300" data-animate="slide-in-up" style={{transitionDelay: '0.4s'}}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Patient-Friendly Billing</h3>
              <p className="mt-2 text-gray-600">A simple, modern portal for patients to see estimates, set up payment plans, and pay online.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300" data-animate="slide-in-up" style={{transitionDelay: '0.5s'}}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-orange-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Seamless EHR Integration</h3>
              <p className="mt-2 text-gray-600">API-first design connects to Epic, Cerner, Athenahealth, and more in days, not months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold" data-animate="slide-in-up">
              The Clear Choice for Financial Health
            </h2>
          </div>
          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-700 p-8 rounded-lg shadow-lg" data-animate="slide-in-left">
              <p className="text-xl italic text-blue-100">"Healthclarified reduced our denial rate by 22% in 90 days. It's the brain of our financial operations."</p>
              <div className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full" src="https://placehold.co/48x48/ffffff/3730a3?text=CFO&font=inter" alt="CFO" />
                <div className="ml-4">
                  <p className="font-semibold text-white">John A. Smith</p>
                  <p className="text-blue-200">CFO, Example Hospital System</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-700 p-8 rounded-lg shadow-lg" data-animate="slide-in-right">
              <p className="text-xl italic text-blue-100">"We cut our administrative billing time in half. Our staff is happier, and our cash flow has never been better."</p>
              <div className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full" src="https://placehold.co/48x48/ffffff/3730a3?text=PM&font=inter" alt="Practice Manager" />
                <div className="ml-4">
                  <p className="font-semibold text-white">Sarah Jenkins</p>
                  <p className="text-blue-200">Practice Manager, Specialty Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gray-50 p-10 sm:p-16 rounded-lg shadow-lg" data-animate="fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Stop Leaving Money on the Table.
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              See exactly how much revenue Healthclarified can recover for you. Get a personalized, no-obligation demo with an RCM specialist today.
            </p>
            <div className="mt-10">
              <a href="#" className="text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl inline-block">
                Book Your Personalized Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <a href="#" className="text-2xl font-bold text-white">Healthclarified</a>
              <p className="mt-4 text-sm">Your Revenue Cycle, Clarified.</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Platform</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:text-white transition-colors">Patient Access</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Mid-Cycle</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Billing & Denials</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Solutions</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:text-white transition-colors">Hospitals</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Specialty Clinics</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Billing Companies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal & Compliance</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
              <div className="mt-4 flex space-x-2">
                <span className="inline-block bg-gray-700 text-gray-200 text-xs font-bold px-2 py-1 rounded">HIPAA COMPLIANT</span>
                <span className="inline-block bg-gray-700 text-gray-200 text-xs font-bold px-2 py-1 rounded">SOC 2</span>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Healthclarified. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
