import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    const[data,setdata]= useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/d87260c1935faca2474dfef3/latest/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=>{setdata(res[currency])})
    
    },[currency])
    return data
}
export default useCurrencyInfo;