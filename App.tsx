
import React, { useState, useEffect } from 'react';
import { Match } from './types';
import { fetchPredictions } from './services/api';
import Header from './components/Header';
import PredictionCard from './components/PredictionCard';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [predictions, setPredictions] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPredictions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchPredictions();
        setPredictions(data);
      } catch (err) {
        setError('Failed to fetch predictions. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getPredictions();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-red-400 bg-red-900/20 p-6 rounded-lg">
          <p className="font-bold text-xl">An Error Occurred</p>
          <p>{error}</p>
        </div>
      );
    }

    if (predictions.length === 0) {
      return (
        <div className="text-center text-gray-400 bg-gray-800 p-6 rounded-lg">
          <p className="font-bold text-xl">No Predictions Available</p>
          <p>Please check back later for the latest match predictions.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {predictions.map((match) => (
          <PredictionCard key={match.id} match={match} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-cyan-400">Today's Predictions</h1>
        <p className="text-lg text-gray-400 text-center mb-12">Expert analysis for upcoming matches.</p>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
