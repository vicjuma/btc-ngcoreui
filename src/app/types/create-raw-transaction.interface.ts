export interface CreateRawTransactionRequest {
  inputs: CreateRawTransactionInput[];
  outputs: CreateRawTransactionOutput[];
  locktime?: number;
  replaceable?: boolean;
  version?: number;
}

export interface CreateRawTransactionInput {
  txid: string;
  vout: number;
  sequence?: number;
}

export interface CreateRawTransactionOutput {
  [key: string]: string | number;
}
