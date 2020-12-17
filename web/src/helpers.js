import { useRef, useEffect, useState, useCallback } from 'react';

export function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

export const getSetThemeMode = (modes) => Object.keys(modes)[0];

export const getTimeBasedTheme = (hour) => {
  if (hour < 18 && hour > 7) {
    return 'light';
  } else {
    return 'dark';
  }
}

export function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = useCallback(() => {
    if (element && element.current) {
      window.scrollY > (element.current.getBoundingClientRect().bottom * .9)
        ? setSticky(true)
        : setSticky(false)
      }
  }, [element]);

  // This function handles the scroll performance issue
  const debounce = useCallback(
    (func, wait = 5, immediate = true) => {
      let timeOut;
      return () => {
        let context = this, args = arguments;
        
        const later = () => {
          timeOut = null;
          if (!immediate) func.apply(context, args)
        }
        
        const callNow = immediate && !timeOut;
        clearTimeout(timeOut);
        timeOut = setTimeout(later, wait);
        if (callNow) {
          func.apply(context, args);
        }
      }
    }, []);

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    }
  }, [debounce, handleScroll])

  return { isSticky, element }
}
