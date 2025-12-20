import React from 'react';
import { Clock } from 'lucide-react';

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Section - розтягнутий по висоті */}
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pb-32">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
            <Clock className="w-10 h-10 text-gray-700" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Ми працюємо над чимось особливим. Незабаром тут з'явиться щось
            цікаве!
          </p>

          <div className="flex justify-center gap-2">
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: '0s' }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: '0.2s' }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: '0.4s' }}
            ></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2024 Всі права захищені
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;
