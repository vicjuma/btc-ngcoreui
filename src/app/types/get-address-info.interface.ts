export interface GetAddressInfoRequest {
  address: string;
}

export interface GetAddressInfoResponse {
  address: string;
  scriptPubKey: string;
  ismine: boolean;
  iswatchonly: boolean;
  solvable: boolean;
  desc?: string;
  parent_desc?: string;
  isscript?: boolean;
  ischange: boolean;
  iswitness: boolean;
  witness_version?: number;
  witness_program?: string;
  script?: string;
  hex?: string;
  pubkeys?: string[];
  sigsrequired?: number;
  pubkey?: string;
  embedded?: EmbeddedAddressInfo;
  iscompressed?: boolean;
  timestamp?: number;
  hdkeypath?: string;
  hdseedid?: string;
  hdmasterfingerprint?: string;
  labels: string[];
}

export interface EmbeddedAddressInfo {
  address?: string;
  scriptPubKey?: string;
  iswatchonly?: boolean;
  solvable?: boolean;
  desc?: string;
  parent_desc?: string;
  isscript?: boolean;
  ischange?: boolean;
  iswitness?: boolean;
  witness_version?: number;
  witness_program?: string;
  script?: string;
  hex?: string;
  pubkeys?: string[];
  sigsrequired?: number;
  pubkey?: string;
  iscompressed?: boolean;
  labels?: string[];
}
