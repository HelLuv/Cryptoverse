import {IStats} from "./IStats";
import {ICoin} from "./ICoins";

export interface ICryptos {
  stats: IStats;
  coins: Array<ICoin>;
}

