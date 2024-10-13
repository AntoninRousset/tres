import { ComputedRef, MaybeRef, MaybeRefOrGetter, Ref } from 'vue';
export interface SizesType {
    height: Readonly<Ref<number>>;
    width: Readonly<Ref<number>>;
    aspectRatio: ComputedRef<number>;
}
export default function useSizes(windowSize: MaybeRefOrGetter<boolean>, canvas: MaybeRef<HTMLCanvasElement>, debounceMs?: number): {
    height: Readonly<Ref<number, number>>;
    width: Readonly<Ref<number, number>>;
    aspectRatio: ComputedRef<number>;
};
