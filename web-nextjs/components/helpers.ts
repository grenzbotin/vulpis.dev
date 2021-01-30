import { useRef, useEffect, useState, useCallback } from 'react';

export const useFirstRender = (): boolean => {
	const firstRender = useRef(true);

	useEffect(() => {
		firstRender.current = false;
	}, []);

	return firstRender.current;
}

export const getTimeBasedTheme = (hour: number): string => {
	if (hour < 18 && hour > 7) {
		return 'light';
	} else {
		return 'dark';
	}
}

interface stickyProps {
	isSticky: boolean,
	element: React.RefObject<HTMLElement>,
}

export const useSticky = (): stickyProps => {
	const [isSticky, setSticky] = useState(false);
	const element = useRef(null);

	const handleScroll = useCallback(() => {
		if (element && element.current) {
			window.scrollY > (element.current.getBoundingClientRect().bottom * .9)
				? setSticky(true)
				: setSticky(false)
			}
	}, [element]);

	// Potential performance issues: debounce handleScroll
	const debounce = (func: () => void, wait = 13, immediate = true): () => void => {
	let timeOut: ReturnType<typeof setTimeout>;

		return (...args) => {
			const later = (): void => {
				timeOut = null
				if (!immediate) func.apply(this, args)
			}
			const callNow = immediate && !timeOut
			clearTimeout(timeOut)
			timeOut = setTimeout(later, wait)
			if (callNow) func.apply(this, args)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", debounce(handleScroll), { passive: true });
		return () => {
			window.removeEventListener("scroll", () => handleScroll);
		}
	}, [handleScroll])

	return { isSticky, element }
}
