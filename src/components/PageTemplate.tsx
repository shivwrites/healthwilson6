
interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  wide?: boolean;
}

function PageTemplate({ title, subtitle, children, wide = false }: PageTemplateProps) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-12 ${wide ? '' : 'max-w-4xl mx-auto'}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
          {title}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>

      {/* Page Content */}
      {children || (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 text-center py-12">
          <p className="text-lg text-gray-600">Content coming soon...</p>
        </div>
      )}
    </div>
  );
}

export default PageTemplate;
