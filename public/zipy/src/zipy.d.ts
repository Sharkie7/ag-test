import * as types from "./lib/utils/zipy-types";
/**
 * init sdk corresponding
 * @param sdkKey Key to identify sdk customer
 * @param debugLogs to print logs
 */
export declare const init: (sdkKey: string, options?: Partial<types.options>) => Promise<void>;
/**
 * To identify end user identity
 * @param externalUUId uuid of the end user
 * @options to get optional details of user
 */
export declare const identify: (externalUUId: string, userInfo?: any) => void;
/**
 * To anonymize end user on logout
 */
export declare const anonymize: () => void;
/**
 * This function will return the current session url
 * @returns url
 */
export declare const getCurrentSessionURL: () => string;
/**
 * @param  {string} message
 * @param  {types.zipyEventOptions} options?
 * This method allows customers to log custom messages.
 */
export declare const logMessage: (message: string, options?: types.zipyEventOptions) => void;
/**
 * @param  {unknown} err
 * This method allows customers to log exceptions that are handled by user but want to capture in Zipy
 */
export declare const logException: (err: unknown) => void;
/**
 * @param  {string} name
 * @param  {string} message
 * @param  {string} category?
 * @param  {types.zipyEventOptions} options?
 * This method allows user to add custom errors that customers can log for handling errors.
 */
export declare const logError: (name: string, message: string, category?: string, options?: types.zipyEventOptions) => void;
