
import { Match, PredictionOutcome, Team } from '../types';

const allPremierLeagueTeams: Team[] = [
    { name: 'Arsenal', logoUrl: 'https://picsum.photos/seed/arsenal/40/40' },
    { name: 'Aston Villa', logoUrl: 'https://picsum.photos/seed/astonvilla/40/40' },
    { name: 'Bournemouth', logoUrl: 'https://picsum.photos/seed/bournemouth/40/40' },
    { name: 'Brentford', logoUrl: 'https://picsum.photos/seed/brentford/40/40' },
    { name: 'Brighton & Hove Albion', logoUrl: 'https://picsum.photos/seed/brighton/40/40' },
    { name: 'Chelsea', logoUrl: 'https://picsum.photos/seed/chelsea/40/40' },
    { name: 'Crystal Palace', logoUrl: 'https://picsum.photos/seed/crystalpalace/40/40' },
    { name: 'Everton', logoUrl: 'https://picsum.photos/seed/everton/40/40' },
    { name: 'Fulham', logoUrl: 'https://picsum.photos/seed/fulham/40/40' },
    { name: 'Ipswich Town', logoUrl: 'https://picsum.photos/seed/ipswich/40/40' },
    { name: 'Leicester City', logoUrl: 'https://picsum.photos/seed/leicester/40/40' },
    { name: 'Liverpool', logoUrl: 'https://picsum.photos/seed/liverpool/40/40' },
    { name: 'Manchester City', logoUrl: 'https://picsum.photos/seed/mancity/40/40' },
    { name: 'Manchester United', logoUrl: 'https://picsum.photos/seed/manutd/40/40' },
    { name: 'Newcastle United', logoUrl: 'https://picsum.photos/seed/newcastle/40/40' },
    { name: 'Nottingham Forest', logoUrl: 'https://picsum.photos/seed/nottinghamforest/40/40' },
    { name: 'Southampton', logoUrl: 'https://picsum.photos/seed/southampton/40/40' },
    { name: 'Tottenham Hotspur', logoUrl: 'https://picsum.photos/seed/spurs/40/40' },
    { name: 'West Ham United', logoUrl: 'https://picsum.photos/seed/westham/40/40' },
    { name: 'Wolverhampton Wanderers', logoUrl: 'https://picsum.photos/seed/wolves/40/40' },
];

export const fetchAllTeams = (): Promise<Team[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(allPremierLeagueTeams);
        }, 200); // Fast resolution
    });
};

export const getPredictionForMatch = (homeTeam: Team, awayTeam: Team): Promise<Match> => {
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            const outcomes = [PredictionOutcome.HOME, PredictionOutcome.AWAY, PredictionOutcome.DRAW];
            const randomPrediction = outcomes[Math.floor(Math.random() * outcomes.length)];

            const match: Match = {
                id: `${homeTeam.name}-${awayTeam.name}-${Date.now()}`,
                homeTeam,
                awayTeam,
                league: 'Premier League',
                country: 'England',
                countryCode: 'gb-eng',
                matchDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Simulate a future match date
                prediction: randomPrediction,
            };
            resolve(match);
        }, 1500);
    });
};
