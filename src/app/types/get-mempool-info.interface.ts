export interface GetMempoolInfoResponse {
  loaded: boolean;
  size: number;
  bytes: number;
  usage: number;
  total_fee: number;
  maxmempool: number;
  mempoolminfee: number;
  minrelaytxfee: number;
  incrementalrelayfee: number;
  unbroadcastcount: number;
  permitbaremultisig: boolean;
  maxdatacarriersize: number;
  limitclustercount: number;
  limitclustersize: number;
  optimal: boolean;
}
