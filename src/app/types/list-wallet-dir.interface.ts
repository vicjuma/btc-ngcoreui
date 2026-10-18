export interface ListWalletDirResponse {
  wallets: WalletDirectoryEntry[];
}

export interface WalletDirectoryEntry {
  name: string;
  warnings: string[];
}
