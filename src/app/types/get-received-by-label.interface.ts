export interface GetReceivedByLabelRequest {
  label: string;
  minconf?: number;
  include_immature_coinbase?: boolean;
}

export type GetReceivedByLabelResponse = number;
