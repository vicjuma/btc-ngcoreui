export interface GetTxSpendingPrevoutRequest {
  outputs: GetTxSpendingPrevoutOutput[];
  options?: GetTxSpendingPrevoutOptions;
}

export interface GetTxSpendingPrevoutOutput {
  txid: string;
  vout: number;
}

export interface GetTxSpendingPrevoutOptions {
  mempool_only?: boolean;
  return_spending_tx?: boolean;
}

export interface GetTxSpendingPrevoutResponse {
  txid: string;
  vout: number;
  spendingtxid?: string;
  spendingtx?: string;
  blockhash?: string;
}
