import {useState, useEffect} from "react";
import { VirtualResultList, Cursor, CursorView } from "VirtualResultList";

interface useCursorOptions {
	offset: number,
	pageSize: number,
	preloadPages?: number
}

export function useCursor<DataType>(list: VirtualResultList<DataType> | null, {offset, pageSize, preloadPages=2}: useCursorOptions) {
	const [cursor, setCursor] = useState<Cursor<DataType> | null>(null);
	const [view, setView] = useState<CursorView<DataType> | null>(null);
	useEffect(() => {
		console.log('ye olde effect', {list, cursor});
		if (list && !cursor) {
			const c = list.cursor(offset, pageSize, preloadPages);
			setCursor(c);
			c.onUpdate(() => {
				setView(c.view || null);
			});
		}
		return () => {
			cursor?.destroy();
		}
	}, [list])

	if (!list) {
		return {view: null, controls: null};
	}
	return {view: view, controls: cursor};
}

export default useCursor;