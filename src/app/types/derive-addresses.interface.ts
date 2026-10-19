export type DeriveAddressesRequestRange = number | [number, number];

export interface DeriveAddressesRequest {
  descriptor: string;
  range?: DeriveAddressesRequestRange;
}

export type DeriveAddressesResponse = string[] | string[][];
