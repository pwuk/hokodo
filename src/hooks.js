import { useState, useEffect } from "react";
import {API_URL} from "./Constants";

const useFetch = () => {
    const [theData, setTheData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let controller = new AbortController();
        const fetchData = async () => {
            try {
                const time = Date.now();
                const result = await fetch(API_URL, {
                    signal: controller.signal
                });
                const data = await result.json();

                console.log(Date.now()-time);
                setTimeout(()=>{
                    controller = null;
                    setLoading(false);
                    setTheData(data.books);
                    console.log(Date.now()-time);

                }, 1500 - (Date.now() - time));

            }
            catch (error) {
                setError(error);
                setLoading(false)
            }

            return ()=>controller && controller.abort();
        };
        setLoading(true);
        fetchData();
    }, []);

    return [theData, error, loading];
};

export { useFetch };