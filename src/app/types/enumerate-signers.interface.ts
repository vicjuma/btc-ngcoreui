export interface EnumerateSignersSigner {
  fingerprint: string;
  name: string;
}

export interface EnumerateSignersResponse {
  signers: EnumerateSignersSigner[];
}
