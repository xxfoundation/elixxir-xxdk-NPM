import type { XXDKUtils } from './types/index';

declare global {
  interface Window extends XXDKUtils {
    onWasmInitialized: () => void;
  }
}

import './wasm_exec';
// @ts-ignore
import makeWasm from './wasm-assets/xxdk.wasm';

export const loadUtils = () => new Promise<XXDKUtils>(async (res) => {
  const go = new (window as any).Go();
  go.argv = [
    '--logLevel=1',
    '--fileLogLevel=1',
    // '--workerScriptURL=integrations/assets/logFileWorker.js',
  ]

  const isReady = new Promise<void>((resolve) => {
    window.onWasmInitialized = resolve;
  });
  
  const result = await makeWasm(go.importObject);

  go.run(result.instance);

  await isReady;

  const {
    Base64ToUint8Array,
    ConstructIdentity,
    DecodePrivateURL,
    DecodePublicURL,
    GenerateChannelIdentity,
    GetChannelInfo,
    GetChannelJSON,
    GetClientVersion,
    GetDefaultCMixParams,
    GetLogger,
    GetOrInitPassword,
    GetPublicChannelIdentityFromPrivate,
    GetShareUrlType,
    GetVersion,
    GetWasmSemanticVersion,
    ImportPrivateIdentity,
    IsNicknameValid,
    LoadChannelsManagerWithIndexedDb,
    LoadCmix,
    LoadNotifications,
    LoadNotificationsDummy,
    LoadSynchronizedCmix,
    NewChannelsManagerWithIndexedDb,
    NewCmix,
    NewDMClientWithIndexedDb,
    NewDatabaseCipher,
    NewDummyTrafficManager,
    NewSynchronizedCmix,
    Purge,
    ValidForever,
  } = window;


  return {
    Base64ToUint8Array,
    ConstructIdentity,
    DecodePrivateURL,
    DecodePublicURL,
    GenerateChannelIdentity,
    GetChannelInfo,
    GetChannelJSON,
    GetClientVersion,
    GetDefaultCMixParams,
    GetLogger,
    GetOrInitPassword,
    GetPublicChannelIdentityFromPrivate,
    GetShareUrlType,
    GetVersion,
    GetWasmSemanticVersion,
    ImportPrivateIdentity,
    IsNicknameValid,
    LoadChannelsManagerWithIndexedDb,
    LoadCmix,
    LoadNotifications,
    LoadNotificationsDummy,
    LoadSynchronizedCmix,
    NewChannelsManagerWithIndexedDb,
    NewCmix,
    NewDMClientWithIndexedDb,
    NewDatabaseCipher,
    NewDummyTrafficManager,
    NewSynchronizedCmix,
    Purge,
    ValidForever
  };
  
});