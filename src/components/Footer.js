import React from 'react'

import style from '../style/footer.module.css'

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'

// data
const getData = graphql`
query {
    logo: allContentfulAPropos{edges{node{logo{fluid{...GatsbyContentfulFluid}}}}}
  }
`

const Footer = () => {

    const logo = useStaticQuery(getData)

    return (
        <div className={style.footerDiv}>
            <p>Copyright &copy; Thomas Jardin Photographie - 2020 - Tous droits réservés</p>
            <div className={style.logoDiv}>
                <Img className={style.logo} objectFit="contain" fluid={logo.logo.edges[0].node.logo.fluid}/>
            </div>
            <p>Développé par Paul Carillion</p>
            <a href="https://www.paul-carillion.net" target="_blank"><img className={style.logoDev} src="https://www.paul-carillion.net/monlogo.png"/></a>
        </div>
    )
}

export default Footer
