export type DescriptorProcessPsbtRange = number | [number, number];

export interface DescriptorProcessPsbtDescriptorObject {
  desc: string;
  range?: DescriptorProcessPsbtRange;
}

export type DescriptorProcessPsbtDescriptor = string | DescriptorProcessPsbtDescriptorObject;

export type DescriptorProcessPsbtSighashType =
  | 'DEFAULT'
  | 'ALL'
  | 'NONE'
  | 'SINGLE'
  | 'ALL|ANYONECANPAY'
  | 'NONE|ANYONECANPAY'
  | 'SINGLE|ANYONECANPAY';

export interface DescriptorProcessPsbtRequest {
  psbt: string;
  descriptors: DescriptorProcessPsbtDescriptor[];
  sighashtype?: DescriptorProcessPsbtSighashType;
  bip32derivs?: boolean;
  finalize?: boolean;
}

export interface DescriptorProcessPsbtResponse {
  psbt: string;
  complete: boolean;
  hex?: string;
}
