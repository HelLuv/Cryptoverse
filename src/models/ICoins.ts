export interface ICoin {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  price: string;
  btcPrice: string;
  listedAt: number;
  change: string;
  rank: number;
  twoFourHVolume: string
  marketCap: string
  links: Array<{ name: string; type: string; url: string; }>;
  "24hVolume": string;
  allTimeHigh: { price: string };
  numberOfMarkets: string;
  numberOfExchanges: string;
  supply: { total: string; circulating: string; confirmed: boolean }
}