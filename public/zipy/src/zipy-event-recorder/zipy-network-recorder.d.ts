import * as types from "../lib/utils/zipy-types";
export declare function captureNetworkConnectionEvents(wrappedEmit: any): () => void;
/**
 * Capturing initial perf data when page is loaded.
 * @date 01/06/2023 - 10:38:54
 *
 * @export
 * @param {*} wrappedEmit
 * @returns {types.listenerHandler}
 */
export declare function captureInitialPerfEvents(wrappedEmit: any): types.listenerHandler;
