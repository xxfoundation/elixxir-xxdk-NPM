////////////////////////////////////////////////////////////////////////////////
// Copyright © 2022 xx foundation                                             //
//                                                                            //
// Use of this source code is governed by a license that can be found in the  //
// LICENSE file.                                                              //
////////////////////////////////////////////////////////////////////////////////

// Create a new instance of the Go class (which is defined in the Web Assembly Go runtime)
const go = new Go();

// Initiate the binary
WebAssembly.instantiateStreaming(fetch("wasm/xxdk.wasm"), go.importObject).then((result) => {
    // Run the instance
    go.run(result.instance);
});

// Export the instance's exports as the module's exports
module.exports = go.exports();
