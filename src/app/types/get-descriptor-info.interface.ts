export interface GetDescriptorInfoResponse {
  descriptor: string;
  multipath_expansion?: string[];
  checksum: string;
  isrange: boolean;
  issolvable: boolean;
  hasprivatekeys: boolean;
}
