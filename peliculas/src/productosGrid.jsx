// import productos from "./productos.json";
import { Tarjetaproducto } from "./tarjetaproducto";
import estilo from "./productosGrid.module.css";
import { useEffect, useState } from "react";
import { Spinner } from "./componentes/Spinner";
export function Productosgrid({search}) {
  const [peliculas,setpeliculas] = useState([]);
  const [cargando,setcargando] = useState(true);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs'
    }
  };
  console.log(search);
  useEffect( () => { 
    let url = 'https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1';
    if (search !== "") {
      url = 'https://api.themoviedb.org/3/search/movie?query='+search+'&include_adult=false&language=es-ES&page=1';
    }
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        setpeliculas(response.results);
        setcargando(false);
      })
      .catch(err => console.error(err));
  }, [search]);


  if (cargando){
    return (<Spinner />);
  } else {
  return (
    <>
      <h2>N.peliculas:{peliculas.length}</h2>
      <ul className={estilo.contenedor}>
        {peliculas.map((pelicula) => (
          <Tarjetaproducto pelicula={pelicula} key={pelicula.id} />
        ))}
      </ul>
    </>
  );
  }
}
