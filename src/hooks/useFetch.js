import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch data from the resources..')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    console.log(err);
                    setError(err.message);
                    setIsLoading(false);
                })
        }, 100);  


    },[url])

    return {data, isLoading, error};
}
