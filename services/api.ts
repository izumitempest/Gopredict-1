
import { Match, PredictionOutcome } from '../types';

// This is a mock API. In a real application, you would make a fetch request
// to your backend server here.
// Example:
// export const fetchPredictions = async (): Promise<Match[]> => {
//   const response = await fetch('https://your-api.com/predictions');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   const data = await response.json();
//   // Make sure to parse dates correctly
//   return data.map(match => ({ ...match, matchDate: new Date(match.matchDate) }));
// };

const mockPredictions: Match[] = [
  {
    id: '1',
    homeTeam: { name: 'Manchester United', logoUrl: 'https://picsum.photos/seed/manutd/40/40' },
    awayTeam: { name: 'Chelsea', logoUrl: 'https://picsum.photos/seed/chelsea/40/40' },
    league: 'Premier League',
    country: 'England',
    countryCode: 'gb-eng',
    matchDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    prediction: PredictionOutcome.HOME,
  },
  {
    id: '6',
    homeTeam: { name: 'Liverpool', logoUrl: 'https://picsum.photos/seed/liverpool/40/40' },
    awayTeam: { name: 'Manchester City', logoUrl: 'https://picsum.photos/seed/mancity/40/40' },
    league: 'Premier League',
    country: 'England',
    countryCode: 'gb-eng',
    matchDate: new Date(Date.now() + 26 * 60 * 60 * 1000), // Tomorrow
    prediction: PredictionOutcome.DRAW,
  },
  {
    id: '7',
    homeTeam: { name: 'Arsenal', logoUrl: 'https://picsum.photos/seed/arsenal/40/40' },
    awayTeam: { name: 'Tottenham Hotspur', logoUrl: 'https://picsum.photos/seed/spurs/40/40' },
    league: 'Premier League',
    country: 'England',
    countryCode: 'gb-eng',
    matchDate: new Date(Date.now() + 30 * 60 * 60 * 1000), // Tomorrow
    prediction: PredictionOutcome.HOME,
  },
  {
    id: '8',
    homeTeam: { name: 'Aston Villa', logoUrl: 'https://picsum.photos/seed/astonvilla/40/40' },
    awayTeam: { name: 'Newcastle United', logoUrl: 'https://picsum.photos/seed/newcastle/40/40' },
    league: 'Premier League',
    country: 'England',
    countryCode: 'gb-eng',
    matchDate: new Date(Date.now() + 48 * 60 * 60 * 1000), // In 2 days
    prediction: PredictionOutcome.AWAY,
  },
  {
    id: '9',
    homeTeam: { name: 'Everton', logoUrl: 'https://picsum.photos/seed/everton/40/40' },
    awayTeam: { name: 'West Ham United', logoUrl: 'https://picsum.photos/seed/westham/40/40' },
    league: 'Premier League',
    country: 'England',
    countryCode: 'gb-eng',
    matchDate: new Date(Date.now() + 52 * 60 * 60 * 1000), // In 2 days
    prediction: PredictionOutcome.DRAW,
  },
  {
    id: '10',
    homeTeam: { name: 'Brighton', logoUrl: 'https://picsum.photos/seed/brighton/40/40' },
    awayTeam: { name: 'Fulham', logoUrl: 'https://picsum.photos/seed/fulham/40/40' },
    league: 'Premier League',
    country: 'England',
    countryCode: 'gb-eng',
    matchDate: new Date(Date.now() + 72 * 60 * 60 * 1000), // In 3 days
    prediction: PredictionOutcome.HOME,
  },
];

export const fetchPredictions = (): Promise<Match[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(mockPredictions);
    }, 1500);
  });
};
