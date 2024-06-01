import { useMemo } from "react";
import axios from "axios";

const useApi = () => {
    const api = useMemo(() => {
        return axios.create({
            baseURL: "https://pi-iv-yrw3.vercel.app",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }, []);

    return api;
};

export default useApi;