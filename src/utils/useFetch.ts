import {useEffect, useState} from "react";

export const useFetch = (endpoint:string | null) => {
    const [data, setData] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    useEffect(() => {
        setIsLoaded(false);
        if (endpoint !== null) {
            (async () => {
                const endpointString =`${endpoint}`.toLowerCase().slice(0,4);
                const response = await fetch(`http://localhost:3001/data/${endpointString}`);
                setData(await response.json());
                setIsLoaded(true);
            })();
        }
    }, [endpoint]);
    return [data, isLoaded]
}