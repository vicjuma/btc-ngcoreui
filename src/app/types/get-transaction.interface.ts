export interface GetTransactionRequest {
  txid: string;
  include_watchonly?: boolean;
  verbose?: boolean;
}

export interface GetTransactionResponse {
  amount: number;
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
  details: GetTransactionDetail[];
  hex: string;
  decoded?: DecodedTransaction;
  lastprocessedblock: {
    hash: string;
    height: number;
  };
}

export interface GetTransactionDetail {
  address?: string;
  category: string;
  amount: number;
  label?: string;
  vout: number;
  fee?: number;
  abandoned: boolean;
  parent_descs?: string[];
}

export interface DecodedTransaction {
  txid: string;
  hash: string;
  size: number;
  vsize: number;
  weight: number;
  version: number;
  locktime: number;
  vin: DecodedTransactionInput[];
  vout: DecodedTransactionOutput[];
}

export interface DecodedTransactionInput {
  coinbase?: string;
  txid?: string;
  vout?: number;
  scriptSig?: {
    asm: string;
    hex: string;
  };
  txinwitness?: string[];
  sequence: number;
}

export interface DecodedTransactionOutput {
  value: number;
  n: number;
  scriptPubKey: {
    asm: string;
    desc: string;
    hex: string;
    address?: string;
    type: string;
  };
  ischange?: boolean;
}
