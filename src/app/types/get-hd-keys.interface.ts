export interface GetHdKeysRequest {
  active_only?: boolean;
  private?: boolean;
}

export interface GetHdKeysResponseItem {
  xpub: string;
  has_private: boolean;
  xprv?: string;
  descriptors: HdKeyDescriptor[];
}

export interface HdKeyDescriptor {
  desc: string;
  active: boolean;
}
