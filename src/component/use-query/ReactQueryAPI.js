import {useQuery} from "@tanstack/react-query";
import Axios from "axios";

export default function ReactQueryAPI(){
    const {data , isError , isLoading, refetch } = useQuery({
        queryKey: ["catFact"],
        queryFn: () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
        }
    })
    if(isError){
        return <h1> Oops there was an error </h1>
    }
    if(isLoading){
        return <h1>LOADING</h1>
    }
    return(
        <div>
        <h1>{data.fact}</h1>
        <button onClick={refetch}> Refetch Cat Fact </button>
        </div>
    )
}