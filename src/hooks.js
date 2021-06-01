import { useState, useEffect } from "react";
import {API_URL} from "./Constants";

const useFetch = () => {
    const [theData, setTheData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(API_URL);
                const data = await result.json();
                setLoading(false);
                setTheData(data.books);
            }
            catch (error) {
                setError(error);
                setLoading(false)
            }
        };
        setLoading(true);
        fetchData();
    }, []);

    return [theData, error, loading];
};

export { useFetch };