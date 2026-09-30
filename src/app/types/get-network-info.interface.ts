export interface GetNetworkInfoResponse {
  version: number;
  subversion: string;
  protocolversion: number;
  localservices: string;
  localservicesnames: string[];
  localrelay: boolean;
  timeoffset: number;
  tx_send_rate: number;
  inv_buckets: {
    inbound: {
      backlog: number;
      count_tok: number;
      size_tok: number;
    };
    outbound: {
      backlog: number;
      count_tok: number;
      size_tok: number;
    };
  };
  networkactive: boolean;
  connections: number;
  connections_in: number;
  connections_out: number;
  networks: NetworkInfo[];
  relayfee: number;
  incrementalfee: number;
  localaddresses: LocalAddress[];
  warnings: string[];
}

export interface NetworkInfo {
  name: string;
  limited: boolean;
  reachable: boolean;
  proxy: string;
  proxy_randomize_credentials: boolean;
}

export interface LocalAddress {
  address: string;
  port: number;
  score: number;
}
