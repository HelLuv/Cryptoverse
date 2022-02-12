export interface IExchange {
  uuid: string;
  rank: number;
  iconUrl: string | null;
  name: string;
  "24hVolume": string;
  numberOfMarkets: number;
  marketShare: string;
  description?: string;
  exchangeScore: string;
  numberOfCoins: number;
}