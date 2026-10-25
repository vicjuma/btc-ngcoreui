export interface FundRawTransactionRequest {
  hexstring: string;
  options?: FundRawTransactionOptions;
  iswitness?: boolean;
}

export interface FundRawTransactionInputWeight {
  txid: string;
  vout: number;
  weight: number;
}

export interface FundRawTransactionSolvingData {
  pubkeys?: string[];
  scripts?: string[];
  descriptors?: string[];
}

export interface FundRawTransactionOptions {
  add_inputs?: boolean;
  include_unsafe?: boolean;
  minconf?: number;
  maxconf?: number;
  changeAddress?: string;
  changePosition?: number;
  change_type?: 'legacy' | 'p2sh-segwit' | 'bech32' | 'bech32m';
  includeWatching?: boolean;
  lockUnspents?: boolean;
  fee_rate?: number | string;
  feeRate?: number | string;
  subtractFeeFromOutputs?: number[];
  input_weights?: FundRawTransactionInputWeight[];
  max_tx_weight?: number;
  conf_target?: number;
  estimate_mode?: 'unset' | 'economical' | 'conservative';
  replaceable?: boolean;
  solving_data?: FundRawTransactionSolvingData;
}

export interface FundRawTransactionResponse {
  hex: string;
  fee: number;
  changepos: number;
}
