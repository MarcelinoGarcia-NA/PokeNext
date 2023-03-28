import styles from "../styles/Card.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }) {

    function link(){
        if (pokemon.id <10){
            const link =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemon.id}.png`
            return link
         }
         if (pokemon.id >10 && pokemon.id <100){
            const link =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${pokemon.id}.png`
            return link
         }else {
            const link =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`
            return link
         }    
    }
  return (
    <div className={styles.card}>
      <Image
      width="120"
      height="120"
         src={link()}
        
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </div>
  );
}