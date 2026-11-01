export type WalletProcessPsbtSighashType =
  | 'DEFAULT'
  | 'ALL'
  | 'NONE'
  | 'SINGLE'
  | 'ALL|ANYONECANPAY'
  | 'NONE|ANYONECANPAY'
  | 'SINGLE|ANYONECANPAY';

export interface WalletProcessPsbtRequest {
  psbt: string;
  sign?: boolean;
  sighashtype?: WalletProcessPsbtSighashType;
  bip32derivs?: boolean;
  finalize?: boolean;
}

export interface WalletProcessPsbtResponse {
  psbt: string;
  complete: boolean;
  hex?: string;
}
