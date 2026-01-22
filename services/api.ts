/// <reference types="vite/client" />

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

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const fetchAllTeams = async (): Promise<Team[]> => {
    try {
        const response = await fetch(`${API_URL}/teams`);
        if (!response.ok) throw new Error('Failed to fetch teams');
        return await response.json();
    } catch (error) {
        console.error('Error fetching teams:', error);
        return [];
    }
};

export const getPredictionForMatch = async (homeTeam: Team, awayTeam: Team): Promise<Match> => {
    try {
        const response = await fetch(`${API_URL}/predict`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                home_team: homeTeam.name,
                away_team: awayTeam.name,
            }),
        });
        if (!response.ok) throw new Error('Failed to fetch prediction');
        return await response.json();
    } catch (error) {
        console.error('Error getting prediction:', error);
        throw error;
    }
};
