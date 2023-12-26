import * as types from "../lib/utils/zipy-types";
export declare function wrapEvent(e: types.zipyEvent): types.zipyEventWithTime;
export declare function getSdkConfigData(): any;
/**
 * This method return the value for any property from SDK Config
 * @param name
 * @returns {Object}
 */
export declare function getValueByPropertyNameFromSDKConfig(name: string): any;
export declare function getSdkUrls(): {
    streamMgrUrl: string;
    streamUrl: any;
};
/**
 * This method will return the regex from classes separated by space
 * @param {string} classes list of classes separated by space
 * @param {string} defaultClass default class to add in regex
 *
 * @returns {RegExp} will return regex expression for list of classes
 */
export declare const getClassListRegex: (classes: string, defaultClass: string) => RegExp;
/**
 * @param  {} headers
 * @returns sanitized headers for fetch
 */
export declare function sanitizeFetchHeaders(headers: any): any;
/**
 * @param  {} headers
 * @returns boolean
 */
export declare function isHeaderToBeRemoved(header: string): boolean;
/**
 * @returns Array of headers to be sanitized
 */
export declare function getHeadersToRemove(): Array<string>;
/**
 * [Description]
 * @param console logs arguments
 * @return console message string
 */
export declare function hasErrorObjectArgument(input: any[]): types.hasErrorArgument;
/**
 * [Description]
 * @param console logs arguments
 * @return console message string
 */
export declare function extractConsoleLogs(input: any[]): string;
/**
 * [Description]
 * @param console logs arguments
 * @return Array of console object
 */
export declare function extractConsoleObjects(input: any[]): Array<object>;
/**
 * This method will remove unwanted keys from url query params
 * @param url
 * @returns
 */
export declare function updateQueryStringValueFromRequestUrl(url: string): string;
/**
 * Extracts the value of an identifiable key
 * @date 29/06/2023 - 14:08:10
 *
 * @param {*} data
 * @param {*} key
 * @returns {*}
 */
export declare function extractAPIIdentifierValue(payload: string, key: string): string;
/**
 * This method will Sanitize the Request/Response Payload
 * @param xhrData
 * @param count
 * @param contentLength
 * @returns
 */
export declare function handleRequestResponsePayloadCapturing(xhrData: types.xhrCallData, count: number, contentLength: number, isRequest: boolean): types.xhrCallData;
export declare function ignoreError(data: string): boolean;
export declare function isIframe(): boolean;
/**
 * This method will inform if the iframe is cross-domain or not.
 * @param iframe
 * @returns {boolean}
 */
export declare function canAccessIFrame(iframe: any): boolean;
export declare function isZipyInitializedInParentWindowForSameOrigin(): boolean;
/**
 * This method checks if the response is json or not.
 * @param response
 */
export declare const getResponse: (response: any) => Promise<any>;
export declare function getErrorEventType(message: string, defaultType: types.zipyEventTypes): types.zipyEventTypes;
/**
 * This method get type of a perf event.
 * @param initiatorType
 */
export declare function getEventTypeForPerfStaticAssets(initiatorType: string): types.zipyEventTypes;
export declare const performanceInitiatorType: string[];
export declare function ignoreReq(url: string, statusCode: number, isError: boolean): boolean;
/**
 * Populates performance data object.
 * @date 01/06/2023 - 10:36:12
 *
 * @export
 * @param {*} entry
 * @returns {{ initiatorType: any; nextHopProtocol: any; workerStart: any; redirectStart: any; redirectEnd: any; fetchStart: any; domainLookupStart: any; domainLookupEnd: any; connectStart: any; ... 13 more ...; startTime: any; }}
 */
export declare function populatePerfDataObject(entry: any): any;
/**
 * Mask all numeric values of the url with `{id}`
 *
 * @param url
 * @returns
 */
export declare function maskNumericValues(url: string): string;
/**
 * Check for URL if domain is missing in the xhrURL or fetch URL
 * @date 21/06/2023 - 13:54:25
 *
 * @export
 * @param {string} perfUrl
 * @param {string} xhrUrl
 * @returns {boolean}
 */
export declare function compareSameDomainUrl(xhrUrl: string, perfUrl: string): boolean;
/**
 * This method will get the request URL for fetch calls
 * @param resource
 * @returns
 */
export declare function getUrlFromResource(resource: any): string;
type DeviceType = 'Mobile' | 'Tablet' | 'Web';
/**
 * This method return the type of device user is using
 * @returns {DeviceType}
 */
export declare function getDeviceType(): DeviceType;
export {};
