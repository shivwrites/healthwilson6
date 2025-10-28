import { Briefcase, Users, Rocket, TrendingUp } from 'lucide-react';

function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-purple-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Shape the Future of Healthcare Technology.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Join a team of passionate healthcare and technology professionals working to solve one of healthcare's biggest challenges—revenue cycle management.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#openings" className="text-base font-medium text-white bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
                View Open Positions
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work at Health Clarified?</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We're building the next generation of healthcare revenue cycle management tools. Join us and make a real impact on healthcare organizations nationwide.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Meaningful Work</h3>
                    <p className="text-gray-700 text-sm">
                      Work on solutions that directly impact healthcare providers and patient outcomes
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Great Team</h3>
                    <p className="text-gray-700 text-sm">
                      Collaborate with talented professionals from healthcare, technology, and business backgrounds
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-900 mb-2">Career Growth</h3>
                    <p className="text-gray-700 text-sm">
                      Develop your skills with ongoing training, mentorship, and advancement opportunities
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900 mb-2">Competitive Benefits</h3>
                    <p className="text-gray-700 text-sm">
                      Enjoy comprehensive health insurance, competitive salary, equity, and flexible work arrangements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div id="openings">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
              <div className="max-w-3xl mx-auto">
                <div className="p-8 bg-gray-50 rounded-2xl border-2 border-gray-200 text-center">
                  <p className="text-xl text-gray-600">
                    We currently have no vacant positions available.
                  </p>
                  <p className="text-gray-600 mt-4">
                    Check back soon for new opportunities, or send us your resume to be considered for future openings.
                  </p>
                </div>
              </div>
            </div>
        
            {/* General Application */}
            <div className="mt-8 p-8 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See a Role That Fits?</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  We're always looking for talented people who are passionate about transforming healthcare. 
                  Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <a href="#" className="inline-block text-base font-medium text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-xl">
                  Send Us Your Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
}

export default Careers;
