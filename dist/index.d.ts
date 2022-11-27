import { VirtualResultList, Cursor, CursorView } from "VirtualResultList";
interface useCursorOptions {
    offset: number;
    pageSize: number;
    preloadPages?: number;
}
export declare function useCursor<DataType>(list: VirtualResultList<DataType> | null, { offset, pageSize, preloadPages }: useCursorOptions): {
    view: CursorView<DataType> | null;
    controls: Cursor<DataType> | null;
};
export default useCursor;
