
export enum PredictionOutcome {
  HOME = 'Home Win',
  DRAW = 'Draw',
  AWAY = 'Away Win',
}

export interface Team {
  name: string;
  logoUrl: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  league: string;
  country: string;
  countryCode: string; // ISO 3166-1 alpha-2 code for flag
  matchDate: Date;
  prediction: PredictionOutcome;
}
