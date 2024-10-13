import { LoopCallbackFn } from './../../core/loop';
export declare function useLoop(): {
    pause: import('@vueuse/core').Fn;
    resume: import('@vueuse/core').Fn;
    pauseRender: import('@vueuse/core').Fn;
    resumeRender: import('@vueuse/core').Fn;
    isActive: import('vue').Ref<boolean, boolean>;
    onBeforeRender: (cb: LoopCallbackFn, index?: number) => {
        off: import('@vueuse/core').Fn;
    };
    render: (cb: LoopCallbackFn) => {
        off: import('@vueuse/core').Fn;
    };
    onAfterRender: (cb: LoopCallbackFn, index?: number) => {
        off: import('@vueuse/core').Fn;
    };
};
