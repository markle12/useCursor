import { useState, useEffect } from "react";
export function useCursor(list, { offset, pageSize, preloadPages = 2 }) {
    const [cursor, setCursor] = useState(null);
    const [view, setView] = useState(null);
    useEffect(() => {
        console.log('ye olde effect', { list, cursor });
        if (list && !cursor) {
            const c = list.cursor(offset, pageSize, preloadPages);
            setCursor(c);
            c.onUpdate(() => {
                setView(c.view || null);
            });
        }
        return () => {
            cursor === null || cursor === void 0 ? void 0 : cursor.destroy();
        };
    }, [list]);
    if (!list) {
        return { view: null, controls: null };
    }
    return { view: view, controls: cursor };
}
export default useCursor;
