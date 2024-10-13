import { Fn } from '@vueuse/core';
import { Camera, EventDispatcher, Raycaster, Scene, WebGLRenderer, Clock } from 'three';
import { Ref } from 'vue';
export type LoopStage = 'before' | 'render' | 'after';
export interface LoopCallback {
    delta: number;
    elapsed: number;
    clock: Clock;
}
export interface LoopCallbackWithCtx extends LoopCallback {
    camera: Camera;
    scene: Scene;
    renderer: WebGLRenderer;
    raycaster: Raycaster;
    controls: Ref<(EventDispatcher<object> & {
        enabled: boolean;
    }) | null>;
    invalidate: Fn;
    advance: Fn;
}
export type LoopCallbackFn = (params: LoopCallbackWithCtx) => void;
export interface RendererLoop {
    loopId: string;
    register: (callback: LoopCallbackFn, stage: LoopStage, index?: number) => {
        off: Fn;
    };
    start: Fn;
    stop: Fn;
    pause: Fn;
    resume: Fn;
    pauseRender: Fn;
    resumeRender: Fn;
    isActive: Ref<boolean>;
    isRenderPaused: Ref<boolean>;
    setContext: (newContext: Record<string, any>) => void;
    setReady: (isReady: boolean) => void;
}
export declare function createRenderLoop(): RendererLoop;
