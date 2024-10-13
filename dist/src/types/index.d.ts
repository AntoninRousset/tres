import { DefineComponent, VNode, VNodeRef } from 'vue';
import { TresContext } from '../composables/useTresContextProvider';
import type * as THREE from 'three';
export type AttachFnType = (parent: any, self: TresInstance) => () => void;
export type AttachType = string | AttachFnType;
export type DisposeType = ((self: TresInstance) => void) | boolean | 'default';
export type ConstructorRepresentation = new (...args: any[]) => any;
export type NonFunctionKeys<P> = {
    [K in keyof P]-?: P[K] extends (...args: any[]) => any ? never : K;
}[keyof P];
export type Overwrite<P, O> = Omit<P, NonFunctionKeys<O>> & O;
export type Properties<T> = Pick<T, NonFunctionKeys<T>>;
export type Mutable<P> = {
    [K in keyof P]: P[K] | Readonly<P[K]>;
};
export type Args<T> = T extends ConstructorRepresentation ? ConstructorParameters<T> : any[];
export interface TresCatalogue {
    [name: string]: ConstructorRepresentation;
}
export type EmitEventName = 'render' | 'ready' | 'click' | 'double-click' | 'context-menu' | 'pointer-move' | 'pointer-up' | 'pointer-down' | 'pointer-enter' | 'pointer-leave' | 'pointer-over' | 'pointer-out' | 'pointer-missed' | 'wheel';
export type EmitEventFn = (event: EmitEventName, ...args: any[]) => void;
export type TresCamera = THREE.OrthographicCamera | THREE.PerspectiveCamera;
/**
 * Represents the properties of an instance.
 *
 * @template T - The type of the object.
 * @template P - The type of the arguments.
 */
export interface InstanceProps<T = any, P = any> {
    args?: Args<P>;
    object?: T;
    visible?: boolean;
    dispose?: null;
    attach?: AttachType;
}
interface TresBaseObject {
    removeFromParent?: () => void;
    dispose?: () => void;
    [prop: string]: any;
}
export interface LocalState {
    type: string;
    eventCount: number;
    root: TresContext;
    handlers: Partial<EventHandlers>;
    memoizedProps: {
        [key: string]: any;
    };
    objects: TresObject[];
    parent: TresObject | null;
    primitive?: boolean;
    dispose?: DisposeType;
    attach?: AttachType;
    previousAttach: any;
}
export interface TresObject3D extends THREE.Object3D<THREE.Object3DEventMap> {
    geometry?: THREE.BufferGeometry & TresBaseObject;
    material?: THREE.Material & TresBaseObject;
}
export type TresObject = TresBaseObject & (TresObject3D | THREE.BufferGeometry | THREE.Material | THREE.Fog) & {
    __tres?: LocalState;
};
export type TresInstance = TresObject & {
    __tres: LocalState;
};
export type TresPrimitive = TresInstance & {
    object: TresInstance;
    isPrimitive: true;
};
export interface TresScene extends THREE.Scene {
    __tres: {
        root: TresContext;
    };
}
export interface Intersection extends THREE.Intersection {
    /** The event source (the object which registered the handler) */
    eventObject: TresObject;
}
export interface IntersectionEvent<TSourceEvent> extends Intersection {
    /** The event source (the object which registered the handler) */
    eventObject: TresObject;
    /** An array of intersections */
    intersections: Intersection[];
    /** vec3.set(pointer.x, pointer.y, 0).unproject(camera) */
    unprojectedPoint: THREE.Vector3;
    /** Normalized event coordinates */
    pointer: THREE.Vector2;
    /** Delta between first click and this event */
    delta: number;
    /** The ray that pierced it */
    ray: THREE.Ray;
    /** The camera that was used by the raycaster */
    camera: TresCamera;
    /** stopPropagation will stop underlying handlers from firing */
    stopPropagation: () => void;
    /** The original host event */
    nativeEvent: TSourceEvent;
    /** If the event was stopped by calling stopPropagation */
    stopped: boolean;
}
export type ThreeEvent<TEvent> = IntersectionEvent<TEvent> & Properties<TEvent>;
export type DomEvent = PointerEvent | MouseEvent | WheelEvent;
export interface TresEvent {
    eventObject: TresObject;
    event: DomEvent;
    stopPropagation: () => void;
    stopPropagating: boolean;
    intersections: Intersection[];
    intersects: Intersection[];
}
export interface Events {
    onClick: EventListener;
    onContextMenu: EventListener;
    onDoubleClick: EventListener;
    onWheel: EventListener;
    onPointerDown: EventListener;
    onPointerUp: EventListener;
    onPointerLeave: EventListener;
    onPointerMove: EventListener;
    onPointerCancel: EventListener;
    onLostPointerCapture: EventListener;
}
export interface EventHandlers {
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
    onContextMenu?: (event: ThreeEvent<MouseEvent>) => void;
    onDoubleClick?: (event: ThreeEvent<MouseEvent>) => void;
    onPointerUp?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerDown?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOver?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerEnter?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerLeave?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerMove?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerMissed?: (event: MouseEvent) => void;
    onPointerCancel?: (event: ThreeEvent<PointerEvent>) => void;
    onWheel?: (event: ThreeEvent<WheelEvent>) => void;
}
interface MathRepresentation {
    set(...args: number[] | [THREE.ColorRepresentation]): any;
}
interface VectorRepresentation extends MathRepresentation {
    setScalar(s: number): any;
}
export interface VectorCoordinates {
    x: number;
    y: number;
    z: number;
}
export type MathType<T extends MathRepresentation | THREE.Euler> = T extends THREE.Color ? ConstructorParameters<typeof THREE.Color> | THREE.ColorRepresentation : T extends VectorRepresentation | THREE.Layers | THREE.Euler ? T | Parameters<T['set']> | number | VectorCoordinates : T | Parameters<T['set']>;
type VectorLike<VectorClass extends THREE.Vector2 | THREE.Vector3 | THREE.Vector4> = VectorClass | Parameters<VectorClass['set']> | Readonly<Parameters<VectorClass['set']>> | Parameters<VectorClass['setScalar']>[0];
export type TresVector2 = VectorLike<THREE.Vector2>;
export type TresVector3 = VectorLike<THREE.Vector3>;
export type TresVector4 = VectorLike<THREE.Vector4>;
export type TresColor = ConstructorParameters<typeof THREE.Color> | THREE.Color | number | string;
export type TresColorArray = typeof THREE.Color | [color: THREE.ColorRepresentation];
export type TresLayers = THREE.Layers | Parameters<THREE.Layers['set']>[0];
export type TresQuaternion = THREE.Quaternion | Parameters<THREE.Quaternion['set']>;
export type TresEuler = THREE.Euler;
export type TresControl = THREE.EventDispatcher & {
    enabled: boolean;
};
export type WithMathProps<P> = {
    [K in keyof P]: P[K] extends MathRepresentation | THREE.Euler ? MathType<P[K]> : P[K];
};
interface RaycastableRepresentation {
    raycast: (raycaster: THREE.Raycaster, intersects: THREE.Intersection[]) => void;
}
type EventProps<P> = P extends RaycastableRepresentation ? Partial<EventHandlers> : unknown;
export interface VueProps {
    children?: VNode[];
    ref?: VNodeRef;
    key?: string | number | symbol;
}
export type ElementProps<T extends ConstructorRepresentation, P = InstanceType<T>> = Partial<Overwrite<P, WithMathProps<P> & VueProps & EventProps<P>>>;
export type ThreeElement<T extends ConstructorRepresentation> = Mutable<Overwrite<ElementProps<T>, Omit<InstanceProps<InstanceType<T>, T>, 'object'>>>;
type ThreeExports = typeof THREE;
type ThreeInstancesImpl = {
    [K in keyof ThreeExports as Uncapitalize<K>]: ThreeExports[K] extends ConstructorRepresentation ? ThreeElement<ThreeExports[K]> : never;
};
export interface ThreeInstances extends ThreeInstancesImpl {
    primitive: Omit<ThreeElement<any>, 'args'> & {
        object: object;
    };
}
type TresComponents = {
    [K in keyof ThreeInstances as `Tres${Capitalize<string & K>}`]: DefineComponent<ThreeInstances[K]>;
};
declare module 'vue' {
    interface GlobalComponents extends TresComponents {
    }
}
declare module '@vue/runtime-core' {
    interface GlobalComponents extends TresComponents {
    }
}
declare module '@vue/runtime-dom' {
    interface GlobalComponents extends TresComponents {
    }
}
export {};
