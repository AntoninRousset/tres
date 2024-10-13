import { nodeOps } from 'src/core/nodeOps';
import { AttachType, LocalState, TresInstance, TresObject, TresPrimitive } from 'src/types';
import { Material, Mesh, MeshBasicMaterial, Scene, Vector3 } from 'three';
import { TresContext } from '../composables/useTresContextProvider';
export declare function toSetMethodName(key: string): string;
export declare const merge: (target: any, source: any) => any;
export declare const isHTMLTag: (key: string) => boolean;
export declare function isDOMElement(obj: any): obj is HTMLElement;
export declare function kebabToCamel(str: string): string;
export declare function hyphenate(str: string): string;
export declare function makeMap(str: string, expectsLowerCase?: boolean): (key: string) => boolean;
export declare const uniqueBy: <T, K>(array: T[], iteratee: (value: T) => K) => T[];
export declare const get: <T>(obj: any, path: string | string[]) => T | undefined;
export declare const set: (obj: any, path: string | string[], value: any) => void;
export declare function deepEqual(a: any, b: any): boolean;
export declare function deepArrayEqual(arr1: any[], arr2: any[]): boolean;
/**
 * TypeSafe version of Array.isArray
 */
export declare const isArray: (a: any) => a is any[] | readonly any[];
export declare function editSceneObject(scene: Scene, objectUuid: string, propertyPath: string[], value: any): void;
export declare function createHighlightMaterial(): MeshBasicMaterial;
export declare function animateHighlight(highlightMesh: Mesh, startTime: number): void;
export declare function stopHighlightAnimation(): void;
export declare function createHighlightMesh(object: TresObject): Mesh;
export declare function extractBindingPosition(binding: any): Vector3;
export declare function disposeMaterial(material: Material): void;
export declare function disposeObject3D(object: TresObject): void;
/**
 * Like Array.filter, but modifies the array in place.
 * @param array - Array to modify
 * @param callbackFn - A function called for each element of the array. It should return a truthy value to keep the element in the array.
 */
export declare function filterInPlace<T>(array: T[], callbackFn: (element: T, index: number) => unknown): T[];
export declare function resolve(obj: Record<string, any>, key: string): {
    target: Record<string, any>;
    key: string;
};
export declare function attach(parent: TresInstance, child: TresInstance, type: AttachType): void;
export declare function detach(parent: any, child: TresInstance, type: AttachType): void;
export declare function prepareTresInstance<T extends TresObject>(obj: T, state: Partial<LocalState>, context: TresContext): TresInstance;
export declare function invalidateInstance(instance: TresObject): void;
export declare function noop(fn: string): any;
export declare function setPixelRatio(renderer: {
    setPixelRatio?: (dpr: number) => void;
    getPixelRatio?: () => number;
}, systemDpr: number, userDpr?: number | [number, number]): void;
export declare function setPrimitiveObject(newObject: TresObject, primitive: TresPrimitive, setTarget: (object: TresObject) => void, nodeOpsFns: Pick<ReturnType<typeof nodeOps>, 'patchProp' | 'insert' | 'remove'>, context: TresContext): boolean;
export declare function unboxTresPrimitive<T>(maybePrimitive: T): T | TresInstance;
export declare function doRemoveDetach(node: TresObject, context: TresContext): void;
export declare function doRemoveDeregister(node: TresObject, context: TresContext): void;
