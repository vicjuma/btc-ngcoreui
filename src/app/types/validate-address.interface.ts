export interface ValidateAddressRequest {
  address: string;
}

export interface ValidateAddressResponse {
  isvalid: boolean;
  address?: string;
  scriptPubKey?: string;
  isscript?: boolean;
  iswitness?: boolean;
  witness_version?: number;
  witness_program?: string;
  error?: string;
  error_locations?: number[];
}
