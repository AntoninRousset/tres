import { App as DevtoolsApp } from '@vue/devtools-api';
import { TresContext } from '../composables';
export interface Tags {
    label: string;
    textColor: number;
    backgroundColor: number;
    tooltip?: string;
}
export interface SceneGraphObject {
    id: string;
    label: string;
    children: SceneGraphObject[];
    tags: Tags[];
}
export declare function registerTresDevtools(app: DevtoolsApp, tres: TresContext): void;
