import { EventHook } from '@vueuse/core';
export declare function createReadyEventHook<T>(getIsReady: () => boolean, triggerParams: T, pollIntervalMs?: number): EventHook<T> & {
    cancel: () => void;
};
