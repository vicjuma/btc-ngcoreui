export interface WalletCreateFundedPsbtRequest {
  inputs?: WalletCreateFundedPsbtInput[];
  outputs: WalletCreateFundedPsbtOutput[];
  locktime?: number;
  options?: WalletCreateFundedPsbtOptions;
  bip32derivs?: boolean;
  version?: number;
  psbt_version?: number;
}

export interface WalletCreateFundedPsbtInput {
  txid: string;
  vout: number;
  sequence?: number;
  weight?: number;
}

export interface WalletCreateFundedPsbtOutput {
  [key: string]: string | number;
}

export interface WalletCreateFundedPsbtSolvingData {
  pubkeys?: string[];
  scripts?: string[];
  descriptors?: string[];
}

export interface WalletCreateFundedPsbtOptions {
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
  max_tx_weight?: number;
  conf_target?: number;
  estimate_mode?: 'unset' | 'economical' | 'conservative';
  replaceable?: boolean;
  solving_data?: WalletCreateFundedPsbtSolvingData;
}

export interface WalletCreateFundedPsbtResponse {
  psbt: string;
  fee: number;
  changepos: number;
}
