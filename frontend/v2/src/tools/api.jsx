import { useMemo } from "react";
import axios from "axios";

const useApi = () => {
    const api = useMemo(() => {
        return axios.create({
            baseURL: "https://client-5g3g.onrender.com",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }, []);

    return api;
};

export default useApi;