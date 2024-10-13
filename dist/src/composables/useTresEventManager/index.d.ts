import { EmitEventFn } from 'src/types';
import { Scene } from 'three';
import { TresContext } from '../useTresContextProvider';
export interface TresEventManager {
    /**
     * Forces the event system to refire events with the previous mouse event
     */
    forceUpdate: () => void;
    /**
     * pointer-missed events by definition are fired when the pointer missed every object in the scene
     * So we need to track them separately
     * Note: These are used in nodeOps
     */
    registerObject: (object: unknown) => void;
    deregisterObject: (object: unknown) => void;
    registerPointerMissedObject: (object: unknown) => void;
    deregisterPointerMissedObject: (object: unknown) => void;
}
export declare function useTresEventManager(scene: Scene, context: TresContext, emit: EmitEventFn): {
    forceUpdate: () => void;
    registerObject: (maybeTresObject: unknown) => void;
    deregisterObject: (maybeTresObject: unknown) => void;
    registerPointerMissedObject: (maybeTresObject: unknown) => void;
    deregisterPointerMissedObject: (maybeTresObject: unknown) => void;
};
