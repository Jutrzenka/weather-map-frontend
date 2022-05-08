import {useEffect, useState} from "react";

interface HydroData {
    city: string;
    river: string;
    waterHeight: string;
}

interface SynopticData {
    city: string;
    temp: string;
    relativeHumidity: string;
    totalPrecipitation: string;
    atmosphericPressure: string;
}

interface CompleteData {
    error: boolean;
    name: string;
    hydroData: HydroData[];
    synopticData: SynopticData[];
}

type Data = CompleteData | null;

export const useFetch = (endpoint:string | null):[boolean, Data] => {
    const [data, setData] = useState<Data | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    useEffect(() => {
        setIsLoaded(false);
        if (endpoint !== null) {
            (async () => {
                const endpointString =`${endpoint}`.toLowerCase().slice(0,4);
                const response = await fetch(`http://localhost:3001/data/${endpointString}`);
                const data = (await response.json()) as Data;
                setData(data);
                setIsLoaded(true);
            })();
        }
    }, [endpoint]);
    return [isLoaded, data]
}