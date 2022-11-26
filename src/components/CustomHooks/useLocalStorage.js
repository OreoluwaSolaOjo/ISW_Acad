import React, { useContext, useEffect, useState } from "react";



let Auth ={isAuthenticated: false}
export const useLocalStorage = (storageKey) => {
    // get currently logged in user from context


    const [data, setData] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? Auth);
   
    useEffect(() => {
        // const user = value
        localStorage.setItem(storageKey, JSON.stringify(data))
    }, [data,setData])
    return [data,setData];
}