export type SignRawTransactionWithWalletSighashType =
  | 'DEFAULT'
  | 'ALL'
  | 'NONE'
  | 'SINGLE'
  | 'ALL|ANYONECANPAY'
  | 'NONE|ANYONECANPAY'
  | 'SINGLE|ANYONECANPAY';

export interface SignRawTransactionWithWalletPrevTx {
  txid: string;
  vout: number;
  scriptPubKey: string;
  redeemScript?: string;
  witnessScript?: string;
  amount?: number | string;
}

export interface SignRawTransactionWithWalletRequest {
  hexstring: string;
  prevtxs?: SignRawTransactionWithWalletPrevTx[];
  sighashtype?: SignRawTransactionWithWalletSighashType;
}

export interface SignRawTransactionWithWalletError {
  txid: string;
  vout: number;
  witness?: string[];
  scriptSig?: string;
  sequence?: number;
  error: string;
}

export interface SignRawTransactionWithWalletResponse {
  hex: string;
  complete: boolean;
  errors?: SignRawTransactionWithWalletError[];
}
