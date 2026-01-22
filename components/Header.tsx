
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v1h-2V4H7v1H5V4zM5 7h10v9a2 2 0 01-2 2H7a2 2 0 01-2-2V7z" />
                <path d="M10 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z" />
            </svg>
            <h1 className="text-2xl font-bold text-white">GoPredict</h1>
          </div>
          <nav>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Predictions
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
