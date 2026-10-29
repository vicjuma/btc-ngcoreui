export interface SimulateRawTransactionOptions {
  include_watchonly?: boolean;
}

export interface SimulateRawTransactionRequest {
  rawtxs: string[];
  options?: SimulateRawTransactionOptions;
}

export interface SimulateRawTransactionResponse {
  balance_change: number;
}
