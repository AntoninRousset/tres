import { Object3D, Scene } from 'three';
/**
 * Seek composable return type
 *
 * @export
 * @interface UseSeekReturn
 */
export interface UseSeekReturn {
    seek: (parent: Scene | Object3D, property: string, value: string) => Object3D | null;
    seekByName: (parent: Scene | Object3D, value: string) => Object3D | null;
    seekAll: (parent: Scene | Object3D, property: string, value: string) => Object3D[];
    seekAllByName: (parent: Scene | Object3D, value: string) => Object3D[];
}
/**
 * Composable that provides utilities to easily traverse and navigate through complex scenes and object children graphs
 *
 * @export
 * @return {*}  {UseSeekReturn}
 */
export declare function useSeek(): UseSeekReturn;
