import productos from "./productos.json";
import { Tarjetaproducto } from "./tarjetaproducto";
import estilo from "./productosgridfiltrado.module.css";
import { useEffect, useState } from "react";
import { Spinner } from "./componentes/Spinner";
export function Productosgridfiltrado({ filtro }) {
  const [peliculasfiltr,setpeliculasfiltr] = useState([]);
  const [cargando,setcargando] = useState(true);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs'
    }
  };
  useEffect( () => { 
    fetch('https://api.themoviedb.org/3/search/movie?query='+filtro+'&include_adult=false&language=es-ES&page=1', options)
      .then(response => response.json())
      .then((response) => {setpeliculasfiltr(response.results)
            setcargando(false)
      })
},[]
  )
  if (cargando){
    return (<Spinner />);
  } else {
  return (
    <>
      <h2>N.Productos:{ peliculasfiltr.length }</h2>
      <ul className={estilo.contenedor}>
        {peliculasfiltr.map((pelicula) => (
          <Tarjetaproducto pelicula={pelicula} key={pelicula.id} />
        ))}
      </ul>
    </>
  );
  }
}
