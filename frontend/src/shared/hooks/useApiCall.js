import { useState, useEffect, useCallback } from 'react';
export const useApiCall = (apiFunction, dependencies = [], immediate = true) => {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(immediate);
const [error, setError] = useState(null);
const execute = useCallback(async (...args) => {
try {
setLoading(true);
setError(null);
const result = await apiFunction(...args);
setData(result);
return result;
} catch (err) {
setError(err.message || 'An error occurred');
throw err;
} finally {
setLoading(false);
}
}, [apiFunction]);
useEffect(() => {
if (immediate) {
execute();
}
}, dependencies);
const retry = useCallback(() => {
execute();
}, [execute]);
return { data, loading, error, execute, retry };
};