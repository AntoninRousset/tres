import { ColorSpace, Scene, ShadowMapType, ToneMapping, WebGLRendererParameters, WebGLRenderer } from 'three';
import { EmitEventFn, TresColor } from '../../types';
import { TresContext } from '../useTresContextProvider';
import { RendererPresetsType } from './const';
import { MaybeRefOrGetter } from '@vueuse/core';
import { MaybeRef } from 'vue';
type TransformToMaybeRefOrGetter<T> = {
    [K in keyof T]: MaybeRefOrGetter<T[K]> | MaybeRefOrGetter<T[K]>;
};
export interface UseRendererOptions extends TransformToMaybeRefOrGetter<WebGLRendererParameters> {
    /**
     * Enable shadows in the Renderer
     *
     * @default false
     */
    shadows?: MaybeRefOrGetter<boolean>;
    /**
     * Set the shadow map type
     * Can be PCFShadowMap, PCFSoftShadowMap, BasicShadowMap, VSMShadowMap
     * [see](https://threejs.org/docs/?q=we#api/en/constants/Renderer)
     *
     * @default PCFSoftShadowMap
     */
    shadowMapType?: MaybeRefOrGetter<ShadowMapType>;
    /**
     * Whether to use physically correct lighting mode.
     * See the [lights / physical example](https://threejs.org/examples/#webgl_lights_physical).
     *
     * @default false
     * @deprecated Use {@link WebGLRenderer.useLegacyLights useLegacyLights} instead.
     */
    physicallyCorrectLights?: MaybeRefOrGetter<boolean>;
    /**
     * Whether to use legacy lighting mode.
     *
     * @type {MaybeRefOrGetter<boolean>}
     * @memberof UseRendererOptions
     */
    useLegacyLights?: MaybeRefOrGetter<boolean>;
    /**
     * Defines the output encoding of the renderer.
     * Can be LinearSRGBColorSpace, SRGBColorSpace
     *
     * @default LinearSRGBColorSpace
     */
    outputColorSpace?: MaybeRefOrGetter<ColorSpace>;
    /**
     * Defines the tone mapping used by the renderer.
     * Can be NoToneMapping, LinearToneMapping,
     * ReinhardToneMapping, Uncharted2ToneMapping,
     * CineonToneMapping, ACESFilmicToneMapping,
     * CustomToneMapping
     *
     * @default ACESFilmicToneMapping
     */
    toneMapping?: MaybeRefOrGetter<ToneMapping>;
    /**
     * Defines the tone mapping exposure used by the renderer.
     *
     * @default 1
     */
    toneMappingExposure?: MaybeRefOrGetter<number>;
    /**
     * The color value to use when clearing the canvas.
     *
     * @default 0x000000
     */
    clearColor?: MaybeRefOrGetter<TresColor>;
    windowSize?: MaybeRefOrGetter<boolean | string>;
    preset?: MaybeRefOrGetter<RendererPresetsType>;
    renderMode?: MaybeRefOrGetter<'always' | 'on-demand' | 'manual'>;
    /**
     * A `number` sets the renderer's device pixel ratio.
     * `[number, number]` clamp's the renderer's device pixel ratio.
     */
    dpr?: MaybeRefOrGetter<number | [number, number]>;
}
export declare function useRenderer({ canvas, options, contextParts: { sizes, render, invalidate, advance }, }: {
    canvas: MaybeRef<HTMLCanvasElement>;
    scene: Scene;
    options: UseRendererOptions;
    emit: EmitEventFn;
    contextParts: Pick<TresContext, 'sizes' | 'camera' | 'render'> & {
        invalidate: () => void;
        advance: () => void;
    };
}): {
    renderer: import('vue').ShallowRef<WebGLRenderer>;
};
export type UseRendererReturn = ReturnType<typeof useRenderer>;
export {};
