import React from "react";

export default function FetchAPIData() {

    function fetchData() {
        fetch("https://catfact.ninja/fact")
            .then((response) => response.json())
            .then((jsonData) => console.log(jsonData))
    }

    return(
        <div>
            <button onClick={fetchData}>Fetch Data</button>
        </div>
    )
}