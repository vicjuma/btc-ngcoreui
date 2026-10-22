export interface GetReceivedByAddressRequest {
  address: string;
  minconf?: number;
  include_immature_coinbase?: boolean;
}

export type GetReceivedByAddressResponse = number;
