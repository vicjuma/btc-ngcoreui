export interface AnalyzePsbtRequest {
  psbt: string;
}

export interface AnalyzePsbtMissing {
  pubkeys?: string[];
  signatures?: string[];
  redeemscript?: string;
  witnessscript?: string;
}

export interface AnalyzePsbtInput {
  has_utxo: boolean;
  is_final: boolean;
  missing?: AnalyzePsbtMissing;
  next?: string;
}

export interface AnalyzePsbtResponse {
  inputs?: AnalyzePsbtInput[];
  estimated_vsize?: number;
  estimated_feerate?: number;
  fee?: number;
  next: string;
  error?: string;
}
