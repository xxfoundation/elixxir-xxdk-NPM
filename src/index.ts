import type { XXDKUtils } from './types';

declare global {
  interface Window extends XXDKUtils {}
}

import './wasm/wasm_exec';

export const loadUtils = () => new Promise<XXDKUtils>(async (res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const go = new (window as any).Go();
    // @ts-ignore
  const wasm = await import('./wasm/xxdk.wasm');

  console.log(wasm);
  // const result = await WebAssembly.instantiateStreaming(wasm, go.importObject);
    // Run the instance
  // go.run(result.instance);

  // const {
  //   Base64ToUint8Array,
  //   Crash,
  //   ConstructIdentity,
  //   DecodePrivateURL,
  //   DecodePublicURL,
  //   GenerateChannelIdentity,
  //   GetChannelInfo,
  //   GetChannelJSON,
  //   GetClientVersion,
  //   getCrashedLogFile,
  //   GetDefaultCMixParams,
  //   GetLogger,
  //   GetOrInitPassword,
  //   GetPublicChannelIdentityFromPrivate,
  //   GetShareUrlType,
  //   GetVersion,
  //   GetWasmSemanticVersion,
  //   ImportPrivateIdentity,
  //   IsNicknameValid,
  //   LoadChannelsManagerWithIndexedDb,
  //   LoadCmix,
  //   LogLevel,
  //   NewChannelsDatabaseCipher,
  //   NewChannelsManagerWithIndexedDb,
  //   NewCmix,
  //   NewDMClientWithIndexedDb,
  //   NewDMsDatabaseCipher,
  //   NewDummyTrafficManager,
  //   Purge,
  //   ValidForever,
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // } = (window) || {};

  // res({
  //   Base64ToUint8Array,
  //   Crash,
  //   ConstructIdentity,
  //   DecodePrivateURL,
  //   DecodePublicURL,
  //   GenerateChannelIdentity,
  //   GetChannelInfo,
  //   GetChannelJSON,
  //   GetClientVersion,
  //   getCrashedLogFile,
  //   GetDefaultCMixParams,
  //   GetLogger,
  //   GetOrInitPassword,
  //   GetPublicChannelIdentityFromPrivate,
  //   GetShareUrlType,
  //   GetVersion,
  //   GetWasmSemanticVersion,
  //   ImportPrivateIdentity,
  //   IsNicknameValid,
  //   LoadChannelsManagerWithIndexedDb,
  //   LoadCmix,
  //   LogLevel,
  //   NewChannelsDatabaseCipher,
  //   NewChannelsManagerWithIndexedDb,
  //   NewCmix,
  //   NewDMClientWithIndexedDb,
  //   NewDMsDatabaseCipher,
  //   NewDummyTrafficManager,
  //   Purge,
  //   ValidForever,
  // })
})

export * from './types';