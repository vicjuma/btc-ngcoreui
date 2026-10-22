export interface ListSinceBlockRequest {
  blockhash?: string;
  target_confirmations?: number;
  include_watchonly?: boolean;
  include_removed?: boolean;
  include_change?: boolean;
  label?: string;
}

export interface ListSinceBlockResponse {
  transactions: SinceBlockTransaction[];
  removed?: SinceBlockTransaction[];
  lastblock: string;
}

export interface SinceBlockTransaction {
  address?: string;
  category: string;
  amount: number;
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
  label?: string;
}
