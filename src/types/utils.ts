import type { RemoteStore } from "./store";
import type { CMix } from "./cmix";
import type { DMEventHandler, ChannelEventHandler } from "./events";
import type { ChannelManager, PrivacyLevel } from "./channels";
import type { DMClient } from './dm';

export type DBCipher = {
  GetID: () => number;
  Decrypt: (plaintext: string) => Uint8Array;
}

type DummyTrafficController = {
    GetStatus: () => boolean;
    Pause: () => void;
    Start: () => void;
};

type Logger = {
  StopLogging: () => void,
  GetFile: () => Promise<string>,
  Threshold: () => number,
  MaxSize: () => number,
  Size: () => Promise<number>,
  Worker: () => Worker,
};

export type ChannelManagerCallbacks = {
  EventUpdate: ChannelEventHandler;
}

export type DMClientEventCallback = {
  EventUpdate: DMEventHandler;
}

export type Notifications = {
  AddToken: (newToken: string, app: string) => void;
  RemoveToken: () => void;
  SetMaxState: (maxState: number) => void;
  GetMaxState: () => number;
  GetID: () => number;
}

export type XXDKUtils = {
  NewCmix: (
    ndf: string,
    storageDir: string,
    password: Uint8Array,
    registrationCode: string
  ) => Promise<void>;
  NewSynchronizedCmix: (
    ndf: string,
    storageDir: string,
    remoteStoragePrefixPath: string,
    password: Uint8Array,
    remoteStore: RemoteStore,
  ) => Promise<void>;
  LoadCmix: (
    storageDirectory: string,
    password: Uint8Array,
    cmixParams: Uint8Array
  ) => Promise<CMix>;
  LoadSynchronizedCmix: (
    storageDirectory: string,
    password: Uint8Array,
    remoteStore: RemoteStore,
    cmixParams: Uint8Array
  ) => Promise<CMix>;
  LoadNotifications: (
    cmixId: number
  ) => Notifications;
  LoadNotificationsDummy:  (
    cmixId: number
  ) => Notifications;
  GetDefaultCMixParams: () => Uint8Array;
  GetChannelInfo: (prettyPrint: string) => Uint8Array;
  GetLogger: () => Logger,
  Base64ToUint8Array: (base64: string) => Uint8Array;
  GenerateChannelIdentity: (cmixId: number) => Uint8Array;
  NewChannelsManagerWithIndexedDb: (
    cmixId: number,
    wasmJsPath: string,
    privateIdentity: Uint8Array,
    extensionBuilderIDsJSON: Uint8Array,
    notificationsId: number,
    callbacks: ChannelManagerCallbacks,
    channelDbCipher: number
  ) => Promise<ChannelManager>;
  NewDMClientWithIndexedDb: (
    cmixId: number,
    notificationsId: number,
    cipherId: number,
    wasmJsPath: string,
    privateIdentity: Uint8Array,
    eventCallback: DMClientEventCallback
  ) => Promise<DMClient>;
  NewDatabaseCipher: (
    cmixId: number,
    storagePassword: Uint8Array,
    payloadMaximumSize: number
  ) => DBCipher;
  LoadChannelsManagerWithIndexedDb: (
    cmixId: number,
    wasmJsPath: string,
    storageTag: string,
    extensionBuilderIDsJSON: Uint8Array,
    notificationsId: number,
    callbacks: ChannelManagerCallbacks,
    channelDbCipher: number
  ) => Promise<ChannelManager>;
  GetPublicChannelIdentityFromPrivate: (privateKey: Uint8Array) => Uint8Array;
  IsNicknameValid: (nickname: string) => null;
  GetShareUrlType: (url: string) => PrivacyLevel;
  GetVersion: () => string;
  GetClientVersion: () => string;
  GetOrInitPassword: (password: string) => Promise<Uint8Array>;
  ImportPrivateIdentity: (password: string, privateIdentity: Uint8Array) => Uint8Array;
  ConstructIdentity: (publicKey: Uint8Array, codesetVersion: number) => Uint8Array;
  DecodePrivateURL: (url: string, password: string) => string;
  DecodePublicURL: (url: string) => string;
  GetChannelJSON: (prettyPrint: string) => Uint8Array;
  NewDummyTrafficManager: (
    cmixId: number,
    maximumOfMessagesPerCycle: number,
    durationToWaitBetweenSendsMilliseconds: number,
    upperBoundIntervalBetweenCyclesMilliseconds: number
  ) => DummyTrafficController;
  GetWasmSemanticVersion: () => Uint8Array;
  Purge: (userPassword: string) => void;
  ValidForever: () => number;
}