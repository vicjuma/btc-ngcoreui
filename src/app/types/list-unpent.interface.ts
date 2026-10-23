export interface ListUnspentRequest {
  minconf?: number;
  maxconf?: number;
  addresses?: string[];
  include_unsafe?: boolean;
  query_options?: ListUnspentQueryOptions;
}

export interface ListUnspentQueryOptions {
  minimumAmount?: number | string;
  maximumAmount?: number | string;
  maximumCount?: number;
  minimumSumAmount?: number | string;
  include_immature_coinbase?: boolean;
}

export interface ListUnspentResponse {
  txid: string;
  vout: number;
  address?: string;
  label?: string;
  scriptPubKey: string;
  amount: number;
  confirmations: number;
  ancestorcount?: number;
  ancestorsize?: number;
  ancestorfees?: number;
  redeemScript?: string;
  witnessScript?: string;
  spendable: boolean;
  solvable: boolean;
  reused?: boolean;
  desc?: string;
  parent_descs: string[];
  safe: boolean;
}
