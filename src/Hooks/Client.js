import { useState, useEffect } from 'react';

const isClient = () => typeof window === 'object';

const getWindowSize = () => {
	if (!isClient()) return null;

	return {
		width: window.innerWidth,
		height: window.innerHeight,
	};
};

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize(getWindowSize());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
};

export const useIsMobile = () => {
	const windowSize = useWindowSize();
	return windowSize && windowSize.width < 451;
};

export const useIsCompact = () => {
	const windowSize = useWindowSize();
	return windowSize && windowSize.width < 800;
};

export const useIsSidebarHidden = () => {
	const windowSize = useWindowSize();
	return windowSize && windowSize.width < 1200;
};

export const useIsExtrawide = () => {
	const windowSize = useWindowSize();
	return windowSize && windowSize.width > 1800;
};

export const usePagePadding = () => {
	const isCompact = useIsCompact();
	return 25 * (isCompact ? 1 : 2);
};
