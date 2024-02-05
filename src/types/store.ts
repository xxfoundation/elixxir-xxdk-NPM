
export enum OperationType {
  Created = 0,
  Updated = 1,
  Deleted = 2 
}

export type KVEntry = {
  version: number;
  timestamp: string;
  data: string;
}

type KeyChangedByRemoteCallback = {
  Callback: (
    key: string,
    oldEntry: Uint8Array,
    newEntry: Uint8Array,
    operationType: OperationType
  ) => void;
}


export type RemoteKV = {
  Get: (key: string, version: number) => Promise<Uint8Array>;
  Delete: (key: string, version: number) => Promise<void>;
  Set: (key: string, encodedKVMapEntry: Uint8Array) => Promise<void>;
  ListenOnRemoteKey: (key: string, version: number, onChange: KeyChangedByRemoteCallback) => number;
  DeleteRemoteKeyListener: (key: string, id: number) => void;
}

export interface RemoteStore {
  Read: (path: string) => Promise<Uint8Array | null>;
  Write: (path: string, data: Uint8Array) => Promise<void>;
  GetLastModified: (path: string) => Promise<string | null>;
  ReadDir: (path: string) => Promise<string[]>;
  DeleteAll: () => Promise<void>; 
}