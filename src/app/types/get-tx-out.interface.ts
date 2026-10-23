export interface GetTxOutRequest {
  txid: string;
  n: number;
  include_mempool?: boolean;
}

export interface GetTxOutScriptPubKey {
  asm: string;
  desc: string;
  hex: string;
  type: string;
  address?: string;
}

export interface GetTxOutResponse {
  bestblock: string;
  confirmations: number;
  value: number;
  scriptPubKey: GetTxOutScriptPubKey;
  coinbase: boolean;
}
