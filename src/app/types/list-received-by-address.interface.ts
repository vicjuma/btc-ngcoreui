export interface ListReceivedByAddressRequest {
  minconf?: number;
  include_empty?: boolean;
  include_watchonly?: boolean;
  address_filter?: string;
  include_immature_coinbase?: boolean;
}

export interface ListReceivedByAddressResponse {
  address: string;
  amount: number;
  confirmations: number;
  label: string;
  txids: string[];
}
