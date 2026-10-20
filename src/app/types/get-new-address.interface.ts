export type BitcoinAddressType = 'legacy' | 'p2sh-segwit' | 'bech32' | 'bech32m';

export interface GetNewAddressRequest {
  label?: string;
  address_type?: BitcoinAddressType;
}

export type GetNewAddressResponse = string;
