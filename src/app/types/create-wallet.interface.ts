export interface CreateWalletRequest {
  wallet_name: string;
  disable_private_keys?: boolean;
  blank?: boolean;
  passphrase?: string;
  avoid_reuse?: boolean;
  descriptors?: boolean;
  load_on_startup?: boolean;
  external_signer?: boolean;
}

export interface CreateWalletResponse {
  name: string;
  warnings?: string[];
}
