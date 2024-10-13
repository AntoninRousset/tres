import { Loader, LoadingManager, Object3D } from 'three';
export interface TresLoader<T> extends Loader {
    load: (url: string | string[], onLoad: (result: T) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void) => void;
    loadAsync: (url: string, onProgress?: (event: ProgressEvent) => void) => Promise<T>;
}
export type LoaderProto<T> = new (manager?: LoadingManager) => TresLoader<T>;
export type LoaderReturnType<T, L extends LoaderProto<T>> = T extends unknown ? Awaited<ReturnType<InstanceType<L>['loadAsync']>> : T;
/**
 * Traverse an object and return all the nodes and materials
 *
 * @export
 * @param {Object3D} object
 * @return { [key: string]: any }
 */
export declare function trasverseObjects(object: Object3D): {
    [key: string]: any;
};
export type Extensions<T extends {
    prototype: LoaderProto<any>;
}> = (loader: T['prototype']) => void;
/**
 * Load resources using THREE loaders and return the result as a promise
 *
 * @see https://tresjs.org/api/composables.html#useloader
 * @see https://threejs.org/docs/index.html?q=loader#api/en/loaders/Loader
 *
 * ```ts
 * import { useLoader } from '@tresjs/core'
 * import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
 *
 * const { scene } = await useLoader(THREE.GLTFLoader, 'path/to/asset.gltf')
 * ```
 *
 * @export
 * @template LoaderProto<T>
 * @template string | string[],
 * @param {LoaderProto<T>} Loader
 * @param {string | string[],} url
 * @param {Extensions<TresLoader<T>>} [extensions]
 * @param {(event: ProgressEvent<EventTarget>) => void} [onProgress]
 * @param {(proto: TresLoader<T>) => void} [cb]
 * @return {*}
 */
export declare function useLoader<T>(Loader: LoaderProto<T>, url: string | string[], extensions?: (loader: TresLoader<T>) => void, onProgress?: (event: ProgressEvent<EventTarget>) => void, cb?: (proto: TresLoader<T>) => void): Promise<T | T[]>;
