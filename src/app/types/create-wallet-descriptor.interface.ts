export type WalletDescriptorType = 'legacy' | 'p2sh-segwit' | 'bech32' | 'bech32m';

export interface CreateWalletDescriptorRequest {
  type: WalletDescriptorType;
  internal?: boolean;
  hdkey?: string;
}

export interface CreateWalletDescriptorResponse {
  descs: string[];
}
