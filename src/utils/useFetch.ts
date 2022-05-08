import {useEffect, useState} from "react";

export interface HydroData {
    city: string;
    river: string;
    waterHeight: string;
}

export interface SynopticData {
    city: string;
    temp: string;
    relativeHumidity: string;
    totalPrecipitation: string;
    atmosphericPressure: string;
}

interface CompleteData {
    error: boolean;
    nameVoivodeship: string;
    hydroData: HydroData[];
    synopticData: SynopticData[];
}

export type Data = CompleteData | null;
export type ClearData = CompleteData;

export const useFetch = (endpoint:string | null):[boolean, Data] => {
    const [data, setData] = useState<Data | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(true);
    useEffect(() => {
        if (endpoint !== null) {
            setIsLoaded(false);
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