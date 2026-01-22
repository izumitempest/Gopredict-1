
import React from 'react';
import { Match, PredictionOutcome } from '../types';

interface PredictionCardProps {
  match: Match;
}

const PredictionBadge: React.FC<{ prediction: PredictionOutcome }> = ({ prediction }) => {
  const getBadgeClass = () => {
    switch (prediction) {
      case PredictionOutcome.HOME:
        return 'bg-green-500/20 text-green-300 border-green-500';
      case PredictionOutcome.AWAY:
        return 'bg-blue-500/20 text-blue-300 border-blue-500';
      case PredictionOutcome.DRAW:
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500';
    }
  };

  return (
    <div className={`mt-4 text-center py-2 px-4 rounded-lg border font-semibold text-lg ${getBadgeClass()}`}>
      Prediction: {prediction}
    </div>
  );
};

const PredictionCard: React.FC<PredictionCardProps> = ({ match }) => {
  const { homeTeam, awayTeam, league, country, countryCode, prediction } = match;
  const matchDate = new Date(match.matchDate);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(matchDate);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(matchDate);

  return (
    <div className="bg-gray-800/70 rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02]">
      <div>
        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-2">
            <img 
              src={`https://flagcdn.com/w20/${countryCode}.png`} 
              alt={`${country} flag`} 
              className="w-5 h-auto rounded-sm"
            />
            <span>{league}</span>
          </div>
          <span>{formattedDate}</span>
        </div>
        
        <div className="flex items-center justify-between my-4">
          <div className="flex flex-col items-center w-2/5 text-center">
            <img src={homeTeam.logoUrl} alt={homeTeam.name} className="w-12 h-12 mb-2 rounded-full bg-gray-700" />
            <span className="font-bold text-base">{homeTeam.name}</span>
          </div>
          <div className="text-gray-400 font-bold text-2xl">VS</div>
          <div className="flex flex-col items-center w-2/5 text-center">
            <img src={awayTeam.logoUrl} alt={awayTeam.name} className="w-12 h-12 mb-2 rounded-full bg-gray-700" />
            <span className="font-bold text-base">{awayTeam.name}</span>
          </div>
        </div>

        <p className="text-center text-cyan-400 font-medium">{formattedTime}</p>
      </div>

      <PredictionBadge prediction={prediction} />
    </div>
  );
};

export default PredictionCard;
