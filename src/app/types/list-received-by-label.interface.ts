export interface ListReceivedByLabelRequest {
  minconf?: number;
  include_empty?: boolean;
  include_watchonly?: boolean;
  include_immature_coinbase?: boolean;
}

export interface ListReceivedByLabelResponse {
  amount: number;
  confirmations: number;
  label: string;
}
