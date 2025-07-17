import { useCallback, useMemo, useRef } from "react";
export const useOptimizedCallback = (callback, dependencies) => {
  return useCallback(callback, dependencies);
};
export const useOptimizedMemo = (factory, dependencies) => {
  return useMemo(factory, dependencies);
};
export const useStableCallback = (callback) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  return useCallback((...args) => {
    return callbackRef.current(...args);
  }, []);
};
export const usePrevious = (value) => {
  const ref = useRef();
  const previous = ref.current;
  ref.current = value;
  return previous;
};
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined"
    ? require("react").useLayoutEffect
    : require("react").useEffect;
