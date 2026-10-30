export interface TestMempoolAcceptRequest {
  rawtxs: string[];
  maxfeerate?: number | string;
}

export interface TestMempoolAcceptFees {
  base: number;
  'effective-feerate': number;
  'effective-includes': string[];
}

export interface TestMempoolAcceptResponseItem {
  txid: string;
  wtxid: string;
  'package-error'?: string;
  allowed?: boolean;
  vsize_adjusted?: number;
  vsize?: number;
  vsize_bip141?: number;
  fees?: TestMempoolAcceptFees;
  'reject-reason'?: string;
  'reject-details'?: string;
}

export type TestMempoolAcceptResponse = TestMempoolAcceptResponseItem[];
