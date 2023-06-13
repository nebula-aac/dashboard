import { useState, useEffect } from 'react';

export default function useDataFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        fetch(url, options)
            .then(res => {
                if (res.status === 401 || res.redirected) {
                    if (window.location.host.endsWith('3000')) {
                        window.location = '/user/login'; // For local dev thru node server
                    } else {
                        window.location.reload(); // For use with Go server
                    }
                }

                let result;
                if (res.ok) {
                    result = res.text().then(text => {
                        try {
                            return JSON.parse(text);
                        } catch (e) {
                            return text;
                        }
                    });

                    return result;
                }

                throw new Error(res.statusText);
            })
            .then(data => {
                if (isMounted) {
                    setData(data);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                if (isMounted) {
                    setError(error);
                    setIsLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [url, options]);

    return { data, error, isLoading };
}