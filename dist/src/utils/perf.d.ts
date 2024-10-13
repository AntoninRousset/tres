import { Scene } from 'three';
import { TresObject } from './../types';
export declare function calculateMemoryUsage(object: TresObject | Scene): number;
export declare function bytesToKB(bytes: number): string;
export declare function bytesToMB(bytes: number): string;
export declare function bytesToGB(bytes: number): string;
