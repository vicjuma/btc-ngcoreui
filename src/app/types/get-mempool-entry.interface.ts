export interface GetMempoolEntryRequest {
  txid: string;
}

export interface GetMempoolEntryFees {
  base: number;
  modified: number;
  ancestor: number;
  descendant: number;
  chunk: number;
}

export interface GetMempoolEntryResponse {
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
  fees: GetMempoolEntryFees;
  depends: string[];
  spentby: string[];
  unbroadcast: boolean;
}
