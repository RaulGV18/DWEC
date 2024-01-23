import styles from "../ProductCard.module.css";
import { useParams } from "react-router-dom";
import { Peticion , get } from "../utils/peticion"; 
import { useEffect, useState } from "react";
import { Spinner } from "../componentes/Spinner";

export function DetalleProducto() {
  let { movieID } = useParams();
  const [movie,setMovie]=useState();
  const [cargando,setCargando]= useState(true);


  let urlImagen="https://image.tmdb.org/t/p/w300";
  console.log("el useParam es:"+ movieID);

  //let movie=Peticion(`https://api.themoviedb.org/3/movie/${movieID}?api_key=57537ff19f381dd7b67eee1ea8b8164a`);
  
  useEffect( () => {
  setCargando(true);
  get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=57537ff19f381dd7b67eee1ea8b8164a`)
  .then( (data) => { 
      console.log(data)
      setMovie(data)
      setCargando(false)
  })},[movieID])
  
  
 if (cargando){
  return <Spinner />
 }

  return (
    <div className={styles.cardprincipal}>
      <div>
      <img className={styles.contenedorimagen} src={urlImagen.concat(movie.poster_path)} alt="" />
      </div>
      <p>{movie.title}</p>
      <a href={movie.homepage}>Ver pagina web</a>
      <p className={styles.precio}>{movie.overview}</p>
    </div>
  );
}
