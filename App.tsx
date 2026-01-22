
import React, { useState, useEffect, useCallback } from 'react';
import { Match, Team } from './types';
import { fetchAllTeams, getPredictionForMatch } from './services/api';
import Header from './components/Header';
import PredictionCard from './components/PredictionCard';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [allTeams, setAllTeams] = useState<Team[]>([]);
  const [homeTeam, setHomeTeam] = useState<Team | null>(null);
  const [awayTeam, setAwayTeam] = useState<Team | null>(null);
  const [prediction, setPrediction] = useState<Match | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTeams = async () => {
      const teams = await fetchAllTeams();
      setAllTeams(teams);
    };
    loadTeams();
  }, []);

  const handlePrediction = async () => {
    if (!homeTeam || !awayTeam) {
      setError('Please select both teams to get a prediction.');
      return;
    }
    if (homeTeam.name === awayTeam.name) {
      setError('Please select two different teams.');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setPrediction(null);
      const data = await getPredictionForMatch(homeTeam, awayTeam);
      setPrediction(data);
    } catch (err) {
      setError('Failed to fetch prediction. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setHomeTeam(null);
    setAwayTeam(null);
    setPrediction(null);
    setError(null);
  }

  const TeamSelector: React.FC<{
    label: string;
    selectedTeam: Team | null;
    setSelectedTeam: (team: Team | null) => void;
    opponentTeam: Team | null;
  }> = ({ label, selectedTeam, setSelectedTeam, opponentTeam }) => {
    const availableTeams = allTeams.filter(team => team.name !== opponentTeam?.name);
    
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
        <select
          value={selectedTeam?.name || ''}
          onChange={(e) => {
            const team = allTeams.find(t => t.name === e.target.value) || null;
            setSelectedTeam(team);
          }}
          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="" disabled>Select a team</option>
          {availableTeams.map(team => (
            <option key={team.name} value={team.name}>{team.name}</option>
          ))}
        </select>
      </div>
    );
  };
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      );
    }
    
    if (prediction) {
      return (
        <div className="flex flex-col items-center gap-6">
            <PredictionCard match={prediction} />
            <button
                onClick={handleReset}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
                Compare Again
            </button>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <TeamSelector label="Home Team" selectedTeam={homeTeam} setSelectedTeam={setHomeTeam} opponentTeam={awayTeam} />
            <div className="text-gray-400 font-bold text-2xl mt-8">VS</div>
            <TeamSelector label="Away Team" selectedTeam={awayTeam} setSelectedTeam={setAwayTeam} opponentTeam={homeTeam} />
          </div>
          {error && <p className="text-red-400 text-center mt-4">{error}</p>}
          <div className="mt-8 text-center">
              <button
                  onClick={handlePrediction}
                  disabled={!homeTeam || !awayTeam}
                  className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                  Get Prediction
              </button>
          </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-cyan-400">Team Comparison</h1>
        <p className="text-lg text-gray-400 text-center mb-12">Select two teams to predict the match outcome.</p>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
