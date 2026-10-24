export interface GetRawMempoolRequest {
  verbose?: boolean;
  mempool_sequence?: boolean;
}

export interface GetRawMempoolFees {
  base: number;
  modified: number;
  ancestor: number;
  descendant: number;
  chunk: number;
}

export interface GetRawMempoolTransaction {
  vsize: number;
  vsize_bip141: number;
  vsize_adjusted: number;
  weight: number;
  time: number;
  height: number;
  descendantcount: number;
  descendantsize: number;
  ancestorcount: number;
  ancestorsize: number;
  chunkweight: number;
  wtxid: string;
  fees: GetRawMempoolFees;
  depends: string[];
  spentby: string[];
  unbroadcast: boolean;
}

export interface GetRawMempoolSequenceResponse {
  txids: string[];
  mempool_sequence: number;
}

export type GetRawMempoolResponse =
  string[] | Record<string, GetRawMempoolTransaction> | GetRawMempoolSequenceResponse;
