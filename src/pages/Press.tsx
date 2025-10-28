import PageTemplate from '../components/PageTemplate';

function Press() {
  return (
    <PageTemplate 
      title="Press & Media" 
      subtitle="News, press releases, and media resources"
    >
      <div className="space-y-6">
        <p className="text-lg text-gray-700 mb-8">
          Latest news, press releases, and media resources about Health Clarified.
        </p>
        
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Health Clarified Raises $50M Series B</h3>
            <p className="text-gray-700 mb-4">
              Funding to accelerate AI-powered RCM platform development and expand market reach.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Read More →</a>
          </div>
          
          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="text-sm text-gray-500 mb-2">February 1, 2024</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership with Epic</h3>
            <p className="text-gray-700 mb-4">
              Health Clarified announces deep integration with Epic EHR systems.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Read More →</a>
          </div>
          
          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="text-sm text-gray-500 mb-2">January 10, 2024</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">SOC 2 Type II Certification</h3>
            <p className="text-gray-700 mb-4">
              Health Clarified achieves SOC 2 Type II certification, demonstrating commitment to security.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Read More →</a>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Media Resources</h3>
          <p className="text-gray-700 mb-4">For media inquiries, please contact:</p>
          <p className="text-gray-700 font-semibold">contact@healthclarified.in</p>
          <p className="text-gray-600 text-sm mt-2">Download our media kit, logos, and product screenshots.</p>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Press;


