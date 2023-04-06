import type { XXDKUtils } from './types';
import './wasm/wasm_exec';
declare global {
    interface Window extends XXDKUtils {
    }
}
export declare const loadUtils: () => Promise<XXDKUtils>;
export * from './types';
