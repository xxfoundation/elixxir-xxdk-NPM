////////////////////////////////////////////////////////////////////////////////
// Copyright © 2022 xx foundation                                             //
//                                                                            //
// Use of this source code is governed by a license that can be found in the  //
// LICENSE file.                                                              //
////////////////////////////////////////////////////////////////////////////////


// my-wasm-module.js

// Load the WebAssembly binary from a URL
const wasmUrl = './wasm/xxdk.wasm';

// Define the exports object to be populated with the WebAssembly module's exports
const exports = {};

// Define the module object that will be exported by this module
const myWasmModule = {
    // A function to initialize the WebAssembly module
    async init() {
        // Load the wasm_exec.js file
        const response = await fetch('wasm/wasm_exec.js');
        const wasmExecCode = await response.text();
        // Create the WebAssembly instance
        const go = new global.Go();
        const { instance } = await WebAssembly.instantiateStreaming(fetch(wasmUrl), go.importObject);
        go.run(instance);
        // Populate the exports object with the module's exports
        for (const key of Object.keys(instance.exports)) {
            exports[key] = instance.exports[key];
        }
    },
    // A getter to access the exports object
    get exports() {
        return exports;
    },
};

// Export the module object
export default myWasmModule;

/*
const path = require('path');
const fs = require('fs');
const { TextDecoder } = require('util');

const wasmPath = path.join(__dirname, 'wasm', 'xxdk.wasm');
const wasmModule = new WebAssembly.Module(fs.readFileSync(wasmPath));


// Create a new instance of the Go class (which is defined in the Web Assembly Go runtime)
const go = new Go();

// Initiate the binary
WebAssembly.instantiate(wasmModule, go.importObject).then((result) => {
    // Run the instance
    go.run(result.instance);
});

// Export the instance's exports as the module's exports
module.exports = go.exports();*/
/*


const fs = require('fs');
const path = require("path");

// Get the path to the WASM file
const wasmPath = require.resolve('./wasm/xxdk.wasm');

// Create a new instance of the Go class (which is defined in the Web Assembly Go runtime)
const go = new Go();

// Initiate the binary
WebAssembly.instantiateStreaming(fetch(wasmPath), go.importObject).then((result) => {
    // Run the instance
    go.run(result.instance);
});

// Export the instance's exports as the module's exports
module.exports = go.exports();*/
