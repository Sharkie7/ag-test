import * as types from "./lib/utils/zipy-types";
export declare function sendData({ divolteUrl, divolteJson, failureRetryCount }: {
    divolteUrl: any;
    divolteJson: any;
    failureRetryCount: any;
}): any;
export declare function sendPerfData(perfUrl: any, perfJson: any, failureRetryCount: any): any;
export declare function sendClickData(clickUrl: string, clickData: types.zipyClickData, failureRetryCount: number): any;
export declare function postDataOnServer(streamUrl: any, failureRetryCount: number, params: any, request: any, options?: {}): any;
export declare function getIsApiKeyValid(): boolean;
export declare function setIsApiKeyValid(flag: boolean): void;
