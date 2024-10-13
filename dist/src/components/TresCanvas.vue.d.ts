import { ColorSpace, ShadowMapType, ToneMapping, WebGLRendererParameters } from 'three';
import { RendererPresetsType } from '../composables/useRenderer/const';
import { TresCamera } from '../types/';
import { TresContext } from '../composables';
export interface TresCanvasProps extends Omit<WebGLRendererParameters, 'canvas'> {
    shadows?: boolean;
    clearColor?: string;
    toneMapping?: ToneMapping;
    shadowMapType?: ShadowMapType;
    useLegacyLights?: boolean;
    outputColorSpace?: ColorSpace;
    toneMappingExposure?: number;
    renderMode?: 'always' | 'on-demand' | 'manual';
    dpr?: number | [number, number];
    camera?: TresCamera;
    preset?: RendererPresetsType;
    windowSize?: boolean;
    enableProvideBridge?: boolean;
}
declare function __VLS_template(): {
    slots: Readonly<{
        default: () => any;
    }> & {
        default: () => any;
    };
    refs: {
        canvas: HTMLCanvasElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TresCanvasProps, {
    context: import('vue').ShallowRef<TresContext | null>;
    dispose: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    render: (...args: any[]) => void;
    click: (...args: any[]) => void;
    wheel: (...args: any[]) => void;
    ready: (...args: any[]) => void;
    "double-click": (...args: any[]) => void;
    "context-menu": (...args: any[]) => void;
    "pointer-move": (...args: any[]) => void;
    "pointer-up": (...args: any[]) => void;
    "pointer-down": (...args: any[]) => void;
    "pointer-enter": (...args: any[]) => void;
    "pointer-leave": (...args: any[]) => void;
    "pointer-over": (...args: any[]) => void;
    "pointer-out": (...args: any[]) => void;
    "pointer-missed": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<TresCanvasProps> & Readonly<{
    onRender?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onWheel?: ((...args: any[]) => any) | undefined;
    onReady?: ((...args: any[]) => any) | undefined;
    "onDouble-click"?: ((...args: any[]) => any) | undefined;
    "onContext-menu"?: ((...args: any[]) => any) | undefined;
    "onPointer-move"?: ((...args: any[]) => any) | undefined;
    "onPointer-up"?: ((...args: any[]) => any) | undefined;
    "onPointer-down"?: ((...args: any[]) => any) | undefined;
    "onPointer-enter"?: ((...args: any[]) => any) | undefined;
    "onPointer-leave"?: ((...args: any[]) => any) | undefined;
    "onPointer-over"?: ((...args: any[]) => any) | undefined;
    "onPointer-out"?: ((...args: any[]) => any) | undefined;
    "onPointer-missed"?: ((...args: any[]) => any) | undefined;
}>, {
    alpha: boolean;
    antialias: boolean;
    stencil: boolean;
    preserveDrawingBuffer: boolean;
    depth: boolean;
    logarithmicDepthBuffer: boolean;
    failIfMajorPerformanceCaveat: boolean;
    shadows: boolean;
    useLegacyLights: boolean;
    windowSize: boolean;
    renderMode: "always" | "on-demand" | "manual";
    enableProvideBridge: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
