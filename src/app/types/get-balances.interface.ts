export interface GetBalancesResponse {
  mine: WalletBalances;
  lastprocessedblock: LastProcessedBlock;
}

export interface WalletBalances {
  trusted: number;
  untrusted_pending: number;
  immature: number;
  nonmempool: number;
  used?: number;
}

export interface LastProcessedBlock {
  hash: string;
  height: number;
}
