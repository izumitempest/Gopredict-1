
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800/50 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} GoPredict. All Rights Reserved.</p>
        <p className="text-sm mt-1">Predictions are not guaranteed. Please gamble responsibly.</p>
      </div>
    </footer>
  );
};

export default Footer;
