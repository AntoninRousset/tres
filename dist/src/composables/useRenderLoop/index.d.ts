import { EventHookOn, Fn } from '@vueuse/core';
import { Ref } from 'vue';
import { Clock } from 'three';
export interface RenderLoop {
    delta: number;
    elapsed: number;
    clock: Clock;
}
export interface UseRenderLoopReturn {
    onBeforeLoop: EventHookOn<RenderLoop>;
    onLoop: EventHookOn<RenderLoop>;
    onAfterLoop: EventHookOn<RenderLoop>;
    pause: Fn;
    resume: Fn;
    isActive: Ref<boolean>;
}
export declare const useRenderLoop: () => UseRenderLoopReturn;
