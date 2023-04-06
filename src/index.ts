////////////////////////////////////////////////////////////////////////////////
// Copyright © 2022 xx foundation                                             //
//                                                                            //
// Use of this source code is governed by a license that can be found in the  //
// LICENSE file.                                                              //
////////////////////////////////////////////////////////////////////////////////
import type { XXDKUtils, Logger } from './types';

import './wasm/wasm_exec';
// @ts-ignore
import wasm from './wasm/xxdk.wasm';     

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const go = new (window as any).Go();

declare global {
    interface Window extends XXDKUtils {
    }
}

export const loadUtils = () => new Promise<XXDKUtils>((res) => {
  WebAssembly.instantiateStreaming(wasm, go.importObject).then((result) => {
    // Run the instance
    go.run(result.instance);

    const {
      Base64ToUint8Array,
      Crash,
      ConstructIdentity,
      DecodePrivateURL,
      DecodePublicURL,
      GenerateChannelIdentity,
      GetChannelInfo,
      GetChannelJSON,
      GetClientVersion,
      getCrashedLogFile,
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
      LogLevel,
      NewChannelsDatabaseCipher,
      NewChannelsManagerWithIndexedDb,
      NewCmix,
      NewDMClientWithIndexedDb,
      NewDMsDatabaseCipher,
      NewDummyTrafficManager,
      Purge,
      ValidForever,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } = (window) || {};

    res({
      Base64ToUint8Array,
      Crash,
      ConstructIdentity,
      DecodePrivateURL,
      DecodePublicURL,
      GenerateChannelIdentity,
      GetChannelInfo,
      GetChannelJSON,
      GetClientVersion,
      getCrashedLogFile,
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
      LogLevel,
      NewChannelsDatabaseCipher,
      NewChannelsManagerWithIndexedDb,
      NewCmix,
      NewDMClientWithIndexedDb,
      NewDMsDatabaseCipher,
      NewDummyTrafficManager,
      Purge,
      ValidForever,
    })
  });
})

export * from './types';