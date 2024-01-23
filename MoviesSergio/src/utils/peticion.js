import { useEffect, useState } from "react";

export function Peticion(url){
    const [product,setProductos]=useState([]);
    useEffect(()=>{ 
  fetch(`${url}`)
    .then(res=>res.json()).then(json=>{
      console.log(json);
    setProductos(json)});
  },[]);
  return product;
}


export function get(url){
return fetch(url)
  .then(res=>res.json());
}