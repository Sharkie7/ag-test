import * as types from "./zipy-types";
export declare function getCurrentTimeStamp(): number;
export declare function on(type: string, fn: EventListenerOrEventListenerObject, target: any): types.listenerHandler;
export declare function getUUID(): any;
export declare function getMappingKey(key: string): any;
export declare function isZipyStorageKey(key: string): boolean;
export declare function convertBlockClassesToRegex(blockClasses: string | RegExp | object): RegExp;
