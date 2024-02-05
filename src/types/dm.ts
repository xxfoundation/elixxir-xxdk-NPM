export type DMClient = {
  SendText: (pubkey: Uint8Array, dmToken: number, message: string, leaseTimeMs: number, cmixParams: Uint8Array) => Promise<void>;
  SendReply: (pubkey: Uint8Array, dmToken: number, message: string, replyToId: Uint8Array, leaseTimeMs: number, cmixParams: Uint8Array) => Promise<void>;
  SendReaction: (pubkey: Uint8Array, dmToken: number, message: string, reactToId: Uint8Array, cmixParams: Uint8Array) => Promise<void>;
  GetIdentity: () => Uint8Array;
  SetNickname: (nickname: string) => void;
  GetNickname: () => string;
  GetDatabaseName: () => string;
};