import * as types from "./lib/utils/zipy-types";
/**
 * Check and create zipy Id if not exist
 * @returns zipy Id
 */
export declare function createZipyIdIfNotExists(): string;
/**
 * Fetch endUser Info from localStorage
 * @returns enduser info data
 */
export declare function getzEndUserDetails(): any;
/**
 * Fetch temp endUser Info from localStorage
 * @returns enduser info data
 */
export declare function getTempZEndUserDetails(): any;
/**
 * Create if enduser-info doesn't exists
 * Update if enuser-info already exists in storage
 * @param userInfo
 */
export declare function createAndUpdateEndUserInfo(userInfo: types.storeEndUserInfo): void;
export declare function createAndUpdateEndUserInfoTemp(userInfo: types.storeEndUserInfo): void;
/**
 * Remove enduser-info from localStorage
 */
export declare function removeEndUserInfo(): void;
/**
 * Remove enduser-info-temp from localStorage
 */
export declare function removeTempEndUserInfo(): void;
/**
 * Check if stored user is identified user or unidentified user
 * @returns true if user is identified else false
 */
export declare function isIdentifiedUserExistInStorage(): boolean;
/**
 * Check if stored user is identified user or unidentified user in temp storage
 * @returns true if user is identified else false
 */
export declare function isIdentifiedUserExistInTempStorage(): boolean;
/**
 * Remove Anonyms user from enduser info and update default values
 * @param zEndUserInfo
 * @param zId
 */
export declare function removeAnonymsUser(zEndUserInfo: any, zId: string): void;
export declare function assignAnonymsUser(zEndUserInfo: any, isTempStorage: boolean): void;
/**
 * Remove external User info from local storage end user info
 * Assign anonyms user if exists
 */
export declare function removeExternalUserInfoAndAssignAnonymsUser(): any;
/**
 * Remove external User info from local storage end user info
 * Assign anonyms user if exists
 */
export declare function removeExternalUserInfoAndAssignAnonymsUserInTempStorage(): any;
/**
 * Check if Enduser details need to post on stream manager
 */
export declare function checkIfEndUserInfoFetchRequired(): boolean;
/**
 * Compare stored end user info with new enduser info
 * @param prevEndUserInfo
 * @param newEndUserInfo
 */
export declare function isExternalUserAlreadyExists(prevEndUserInfo: any, newEndUserInfo: any): boolean;
