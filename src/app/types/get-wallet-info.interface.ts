export interface GetWalletInfoResponse {
  walletname: string;
  walletversion: number;
  format?: string;
  txcount: number;
  keypoolsize: number;
  keypoolsize_hd_internal: number;
  unlocked_until?: number;
  private_keys_enabled: boolean;
  avoid_reuse: boolean;
  scanning: WalletScanningInfo | false;
  descriptors: boolean;
  external_signer: boolean;
  blank: boolean;
  birthtime?: number;
  flags: string[];
  lastprocessedblock: LastProcessedBlock;
}

export interface WalletScanningInfo {
  duration: number;
  progress: number;
}

export interface LastProcessedBlock {
  hash: string;
  height: number;
}
