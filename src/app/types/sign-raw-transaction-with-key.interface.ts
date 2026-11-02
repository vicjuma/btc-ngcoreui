export type SignRawTransactionWithKeySighashType =
  | 'DEFAULT'
  | 'ALL'
  | 'NONE'
  | 'SINGLE'
  | 'ALL|ANYONECANPAY'
  | 'NONE|ANYONECANPAY'
  | 'SINGLE|ANYONECANPAY';

export interface SignRawTransactionWithKeyPrevTx {
  txid: string;
  vout: number;
  scriptPubKey: string;
  redeemScript?: string;
  witnessScript?: string;
  amount?: number | string;
}

export interface SignRawTransactionWithKeyRequest {
  hexstring: string;
  privkeys: string[];
  prevtxs?: SignRawTransactionWithKeyPrevTx[];
  sighashtype?: SignRawTransactionWithKeySighashType;
}

export interface SignRawTransactionWithKeyError {
  txid: string;
  vout: number;
  witness?: string[];
  scriptSig?: string;
  sequence?: number;
  error: string;
}

export interface SignRawTransactionWithKeyResponse {
  hex: string;
  complete: boolean;
  errors?: SignRawTransactionWithKeyError[];
}
