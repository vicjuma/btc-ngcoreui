export type RawChangeAddressType = 'legacy' | 'p2sh-segwit' | 'bech32' | 'bech32m';

export interface GetRawChangeAddressRequest {
  address_type?: RawChangeAddressType;
}

export type GetRawChangeAddressResponse = string;
