/**
 * This function returns the value from cookies,
 * if value of cookies are multiple then it returns the object of all values
 * else it returns the single value
 * @param key
 * @returns
 */
export declare const zGetCookie: (key: string) => any;
/**
 * This function sets key and value in cookies with 6 hours of expiration time
 * @param key
 * @param value
 */
export declare const zSetCookie: (key: string, value: number | string) => void;
/**
 * This function returns the objects of key value pair
 * e.g. : data = ['key#value', 'key1#value1'];
 * @param data
 * @returns
 * object = {
 *   key : value,
 *   key1 : value1
 * }
 */
export declare const createObjectFromCookieData: (data: any[]) => {};
/***
 * This function return all the data that we store in cookies from
 * localstorage in the form of object
 */
export declare const zGetCookieDatafromLocalStorage: () => {
    sessionId: any;
    zId: string;
    euId: any;
    isBlocked: any;
    sdkKey: any;
    lastActivityTime: string;
    totalDataSent: string;
    endUserLastActivityTime: string;
    isActive: any;
    externalId: any;
};
/**
 * This function updates the Localstorage data with cookie data
 * @param sdkKey
 * @returns
 */
export declare const zSetLocalStorageDataFromCookie: (sdkKey: string) => void;
/**
 * This function updates the cookies data with local storage
 * @param sdkKey
 * @returns
 */
export declare const zSetCookieDataFromLocalStorage: (sdkKey: string) => void;
