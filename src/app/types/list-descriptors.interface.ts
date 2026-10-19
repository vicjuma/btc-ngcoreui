export interface ListDescriptorsRequest {
  private?: boolean;
}

export interface ListDescriptorsResponse {
  wallet_name: string;
  descriptors: WalletDescriptor[];
}

export interface WalletDescriptor {
  desc: string;
  timestamp: number;
  active: boolean;
  internal?: boolean;
  range?: [number, number];
  next?: number;
  next_index?: number;
}
