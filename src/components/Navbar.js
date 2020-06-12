import React from 'react'

// css

import styles from '../style/navbar.module.css'

// plugins
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Navbar = () => {
    return (
        <nav className={`${styles.nav} row-between-start`}>
            <div>Thomas Jardin <br/> Photographie</div>
            <div className={styles.links}> 
                <AniLink to='/home'><span>Accueil</span></AniLink>, <AniLink to='/categorie' state={{data:'Portrait'}}>Portrait</AniLink>, <AniLink to='/categorie' state={{data:'Reportage'}}>Reportage</AniLink>, <AniLink to='/categorie' state={{data:'Street'}}>Street</AniLink>, <AniLink to='/categorie' state={{data:'Produits'}}>Produits</AniLink>, <AniLink>Vidéo</AniLink>, <AniLink> <span>Contact</span></AniLink>
            </div>
        </nav>
    )
}

export default Navbar
