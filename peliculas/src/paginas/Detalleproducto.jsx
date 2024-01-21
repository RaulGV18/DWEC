import estilo from "./Detalleproducto.module.css";
// import productosImportados from "../productos.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "../componentes/Spinner";
export function Detalles() {
  const { IdPelicula } = useParams();
  const [pelicula,setpelicula] = useState([]);
  const [cargando,setcargando] = useState(true);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs'
    }
  };
  useEffect( () => { 
    fetch('https://api.themoviedb.org/3/movie/'+IdPelicula+'?language=es-ES', options)
    .then(response => response.json())
    .then((response) => {
      setpelicula(response)
      setcargando(false)
    })
    .catch(err => console.error(err));
},[]
  )
  if (cargando){
    return (<Spinner />);
  } else {
  return (
    <div className={estilo.contenedor}>
      <div className={estilo.contenedor_img}>
        <img src={"https://image.tmdb.org/t/p/w300/"+pelicula.poster_path} alt="" />
      </div>
      <div>
        <p>
          <strong>Titulo:</strong>
          {pelicula.title}
        </p>
        <p>
          <strong>Sinopsis:</strong>
          {pelicula.overview}
        </p>
        <p>
          <strong>puntuacion y numero de votos:</strong>
          {pelicula.vote_average}
          {pelicula.vote_count}
        </p>
      </div>
    </div>
  );
  }

}
