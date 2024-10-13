import { TresContext } from '../useTresContextProvider';
export declare function useTresReady(ctx?: TresContext): import('@vueuse/core').EventHook<TresContext> & {
    cancel: () => void;
};
export declare function onTresReady(fn: (ctx: TresContext) => void): {
    off: () => void;
} | undefined;
