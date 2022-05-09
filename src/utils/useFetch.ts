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

export const useFetch = (endpoint:string | null):[boolean, boolean, Data] => {
    const [data, setData] = useState<Data | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
        useEffect(() => {
            if (endpoint !== null) {
                setIsLoaded(false);
                (async () => {
                    try {
                        const endpointString =`${endpoint}`.toLowerCase().slice(0,4);
                        const response = await fetch(`/data/${endpointString}`);
                        const data = (await response.json()) as Data;
                        setData(data);
                        setIsError(false);
                        setIsLoaded(true);
                    } catch (err) {
                        setIsError(true);
                    }
                })();
            }
        }, [endpoint]);
        return [isError, isLoaded, data]
}