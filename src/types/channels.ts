export enum PrivacyLevel {
  Public = 0,
  Private = 1,
  Secret = 2
}

export type ChannelManager = {
  GetID: () => number;
  AreDMsEnabled: (channelId: Uint8Array) => boolean;
  DisableDirectMessages: (channelId: Uint8Array) => void;
  EnableDirectMessages: (channelId: Uint8Array) => void;
  JoinChannel: (channelId: string) => Promise<Uint8Array>;
  LeaveChannel: (channelId: Uint8Array) => Promise<void>;
  GetMutedUsers: (channelId: Uint8Array) => Uint8Array;
  Muted: (channelId: Uint8Array) => boolean;
  MuteUser: (channelId: Uint8Array, publicKey: Uint8Array, mute: boolean, messageValidityTimeoutMilliseconds: number, cmixParams?: Uint8Array) => Promise<void>;
  SendMessage: (channelId: Uint8Array, message: string, messageValidityTimeoutMilliseconds: number, cmixParams: Uint8Array) => Promise<Uint8Array>;
  PinMessage: (channelId: Uint8Array, messageId: Uint8Array, unpin: boolean, pinDurationInMilliseconds: number, cmixParams: Uint8Array) => Promise<Uint8Array>;
  DeleteMessage: (channelId: Uint8Array, messageId: Uint8Array, cmixParams: Uint8Array) => Promise<void>;
  SendReaction: (channelId: Uint8Array, reaction: string, messageToReactTo: Uint8Array, messageValidityTimeoutMilliseconds: number, cmixParams: Uint8Array) => Promise<Uint8Array>;
  SendReply: (channelId: Uint8Array, message: string, messageToReactTo: Uint8Array, messageValidityTimeoutMilliseconds: number, cmixParams: Uint8Array) => Promise<Uint8Array>;
  IsChannelAdmin: (channelId: Uint8Array) => boolean;
  GenerateChannel: (channelname: string, description: string, privacyLevel: PrivacyLevel) => Promise<string>;
  GetStorageTag: () => string | undefined;
  SetNickname: (newNickname: string, channel: Uint8Array) => void;
  GetNickname: (channelId: Uint8Array) => string;
  GetIdentity: () => Uint8Array;
  GetShareURL: (cmixId: number, host: string, maxUses: number, channelId: Uint8Array) => Uint8Array;
  JoinChannelFromURL: (url: string, password: string) => Uint8Array;
  ExportPrivateIdentity: (password: string) => Uint8Array;
  ExportChannelAdminKey: (channelId: Uint8Array, encryptionPassword: string) => Uint8Array;
  ImportChannelAdminKey: (channelId: Uint8Array, encryptionPassword: string, privateKey: Uint8Array) => void;
};