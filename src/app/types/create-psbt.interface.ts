export interface CreatePsbtRequest {
  inputs: CreatePsbtInput[];
  outputs: CreatePsbtOutput[];
  locktime?: number;
  replaceable?: boolean;
  version?: number;
  psbt_version?: number;
}

export interface CreatePsbtInput {
  txid: string;
  vout: number;
  sequence?: number;
}

export interface CreatePsbtOutput {
  [key: string]: number | string;
}
