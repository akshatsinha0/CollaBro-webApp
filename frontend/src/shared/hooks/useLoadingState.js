import { useState, useCallback } from "react";
export const useLoadingState = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [error, setError] = useState(null);
  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(null);
  }, []);
  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);
  const setLoadingError = useCallback((error) => {
    setIsLoading(false);
    setError(error);
  }, []);
  const withLoading = useCallback(
    async (asyncFunction) => {
      try {
        startLoading();
        const result = await asyncFunction();
        stopLoading();
        return result;
      } catch (err) {
        setLoadingError(err);
        throw err;
      }
    },
    [startLoading, stopLoading, setLoadingError],
  );
  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setLoadingError,
    withLoading,
  };
};
