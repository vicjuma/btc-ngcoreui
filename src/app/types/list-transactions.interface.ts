export interface ListTransactionsRequest {
  label?: string;
  count?: number;
  skip?: number;
  include_watchonly?: boolean;
}

export interface ListTransactionsResponse {
  address?: string;
  category: string;
  amount: number;
  label?: string;
  vout: number;
  fee?: number;
  confirmations: number;
  generated?: boolean;
  trusted?: boolean;
  blockhash?: string;
  blockheight?: number;
  blockindex?: number;
  blocktime?: number;
  txid: string;
  wtxid: string;
  alternate_wtxids: string[];
  walletconflicts: string[];
  replaced_by_txid?: string;
  replaces_txid?: string;
  mempoolconflicts: string[];
  to?: string;
  time: number;
  timereceived: number;
  comment?: string;
  'bip125-replaceable'?: string;
  parent_descs?: string[];
  abandoned: boolean;
}
