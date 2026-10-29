export type UtxoUpdatePsbtDescriptorRange = number | [number, number];

export interface UtxoUpdatePsbtDescriptorObject {
  desc: string;
  range?: UtxoUpdatePsbtDescriptorRange;
}

export type UtxoUpdatePsbtDescriptor = string | UtxoUpdatePsbtDescriptorObject;

export interface UtxoUpdatePsbtRequest {
  psbt: string;
  descriptors?: UtxoUpdatePsbtDescriptor[];
}

export type UtxoUpdatePsbtResponse = string;
