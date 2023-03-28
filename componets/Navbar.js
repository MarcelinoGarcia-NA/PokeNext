import Styles from "../styles/Navbar.module.css"
import Image from "next/image"
import pokeball from "../public/images/pokeball.png"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav className={Styles.navbar}>
          <div className={Styles.logo}>
            <Image 
              src={pokeball} 
              width="30"
              height="30"
              alt="Logo pokeball"
              />
              <h1>Poknext</h1>
          </div>
          <ul className={Styles.link_itens}>
             <li><Link href="/">Home</Link></li>
             <li><Link href="/about">Sobre</Link></li>
          </ul>
        </nav>

    )
}