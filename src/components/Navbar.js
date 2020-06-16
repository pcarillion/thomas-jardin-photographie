import React from 'react'

// css

import styles from '../style/navbar.module.css'

// plugins
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'

// data


const getData = graphql`
query {
    logo: allContentfulAPropos{edges{node{logo{fluid{...GatsbyContentfulFluid}}}}}
  }
`

const Navbar = () => {

    const logo = useStaticQuery(getData)

    console.log(logo.logo.edges[0].node.logo.fluid)
  

    return (
        <nav className={`${styles.nav} row-between-start`}>
            <AniLink fade to='/home' className={styles.logoDiv}>
                <Img className={styles.logo} objectFit="contain" fluid={logo.logo.edges[0].node.logo.fluid}/>
            </AniLink>
            <div className={styles.links}> 
                <AniLink fade to='/home'><span>Accueil</span></AniLink>, <AniLink fade to='/portrait'>Portrait</AniLink>, <AniLink fade to='/mode'>Mode</AniLink>, <AniLink fade to='/reportage'>Reportage</AniLink>, <AniLink fade to='/personnel'>Personnel</AniLink>, <AniLink fade to='/produit'>Produit</AniLink>, <AniLink fade to='/video'>Vidéo</AniLink>, <AniLink to='/contact' fade> <span>Contact</span></AniLink>
            </div>
        </nav>
    )
}

export default Navbar
