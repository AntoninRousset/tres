import { EventHookOff, IsAny } from '@vueuse/core';
export type Callback<T> = IsAny<T> extends true ? (param: any) => void : ([
    T
] extends [void] ? () => void : (param: T) => void);
export type PriorityEventHookOn<T> = (fn: Callback<T>, priority?: number) => {
    off: () => void;
};
export type PriorityEventHookOff<T> = EventHookOff<T>;
export type PriorityEventHookTrigger<T = any> = (param?: T) => void;
export interface PriorityEventHook<T = any> {
    on: PriorityEventHookOn<T>;
    off: EventHookOff<T>;
    trigger: PriorityEventHookTrigger<T>;
    dispose: () => void;
    count: number;
}
export declare function createPriorityEventHook<T>(): PriorityEventHook<T>;
