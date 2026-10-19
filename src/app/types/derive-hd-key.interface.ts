export interface DeriveHdKeyRequest {
  path: string;
  private?: boolean;
  hdkey?: string;
}

export interface DeriveHdKeyResponse {
  origin: string;
  xpub: string;
  xprv?: string;
}
