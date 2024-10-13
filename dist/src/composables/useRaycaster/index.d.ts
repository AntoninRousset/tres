import { TresEvent, TresInstance } from 'src/types';
import { Intersection, Object3D, Object3DEventMap } from 'three';
import { ShallowRef } from 'vue';
import { TresContext } from '../useTresContextProvider';
export declare const useRaycaster: (objectsWithEvents: ShallowRef<TresInstance[]>, ctx: TresContext) => {
    intersects: ShallowRef<Intersection<Object3D<Object3DEventMap>>[]>;
    onClick: (fn: (value: TresEvent) => void) => () => void;
    onDblClick: (fn: (value: TresEvent) => void) => () => void;
    onContextMenu: (fn: (value: TresEvent) => void) => () => void;
    onPointerMove: (fn: (value: TresEvent) => void) => () => void;
    onPointerUp: (fn: (value: TresEvent) => void) => () => void;
    onPointerDown: (fn: (value: TresEvent) => void) => () => void;
    onPointerMissed: (fn: (value: TresEvent) => void) => () => void;
    onWheel: (fn: (value: TresEvent) => void) => () => void;
    forceUpdate: () => void;
};
