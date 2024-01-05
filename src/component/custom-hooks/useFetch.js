import {useState , useEffect } from "react";
import Axios from "axios";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(url)
            .then((res) =>  {
                setData(res.data)
                setLoading(false)
            })
    },[url])
    return {data,loading}
}