import { useState, useEffect } from "react";
import {API_URL} from "./Constants";

const useFetch = () => {
    const [theData, setTheData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(API_URL);
                const data = await result.json();
                setTheData(data);
            }
            catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    return [theData, error];
};

export { useFetch };