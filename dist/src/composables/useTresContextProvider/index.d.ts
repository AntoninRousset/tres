import { Camera, WebGLRenderer, Raycaster } from 'three';
import { ComputedRef, DeepReadonly, MaybeRef, MaybeRefOrGetter, Ref, ShallowRef } from 'vue';
import { RendererLoop } from '../../core/loop';
import { EmitEventFn, TresControl, TresObject, TresScene } from '../../types';
import { UseRendererOptions } from '../useRenderer';
import { SizesType } from '../useSizes';
import { TresEventManager } from '../useTresEventManager';
export interface InternalState {
    priority: Ref<number>;
    frames: Ref<number>;
    maxFrames: number;
}
export interface RenderState {
    /**
     * If set to 'on-demand', the scene will only be rendered when the current frame is invalidated
     * If set to 'manual', the scene will only be rendered when advance() is called
     * If set to 'always', the scene will be rendered every frame
     */
    mode: Ref<'always' | 'on-demand' | 'manual'>;
    priority: Ref<number>;
    frames: Ref<number>;
    maxFrames: number;
    canBeInvalidated: ComputedRef<boolean>;
}
export interface PerformanceState {
    maxFrames: number;
    fps: {
        value: number;
        accumulator: number[];
    };
    memory: {
        currentMem: number;
        allocatedMem: number;
        accumulator: number[];
    };
}
export interface TresContext {
    scene: ShallowRef<TresScene>;
    sizes: SizesType;
    extend: (objects: any) => void;
    camera: ComputedRef<Camera | undefined>;
    cameras: DeepReadonly<Ref<Camera[]>>;
    controls: Ref<TresControl | null>;
    renderer: ShallowRef<WebGLRenderer>;
    raycaster: ShallowRef<Raycaster>;
    perf: PerformanceState;
    render: RenderState;
    loop: RendererLoop;
    /**
     * Invalidates the current frame when renderMode === 'on-demand'
     */
    invalidate: () => void;
    /**
     * Advance one frame when renderMode === 'manual'
     */
    advance: () => void;
    registerCamera: (maybeCamera: unknown) => void;
    setCameraActive: (cameraOrUuid: Camera | string) => void;
    deregisterCamera: (maybeCamera: unknown) => void;
    eventManager?: TresEventManager;
    registerObjectAtPointerEventHandler?: (object: TresObject) => void;
    deregisterObjectAtPointerEventHandler?: (object: TresObject) => void;
    registerBlockingObjectAtPointerEventHandler?: (object: TresObject) => void;
    deregisterBlockingObjectAtPointerEventHandler?: (object: TresObject) => void;
}
export declare function useTresContextProvider({ scene, canvas, windowSize, rendererOptions, emit, }: {
    scene: TresScene;
    canvas: MaybeRef<HTMLCanvasElement>;
    windowSize: MaybeRefOrGetter<boolean>;
    rendererOptions: UseRendererOptions;
    emit: EmitEventFn;
}): TresContext;
export declare function useTresContext(): TresContext;
export declare const useTres: typeof useTresContext;
