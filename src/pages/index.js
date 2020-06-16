import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'
import SEO from '../components/SEO'


// css

import '../components/layout.css'


// data

const getData = graphql`
query {
  logo: allContentfulAPropos{edges{node{logo{fluid{...GatsbyContentfulFluid}}}}}
}`


export default function Index() {

  const logo = useStaticQuery(getData)

  console.log(logo.logo.edges[0].node.logo.fluid)

  return <div className="index-div column-center-center">
          <SEO title='Thomas Jardin Photographie'/>
          <a href="/home">
            <Img className='main-logo' objectFit="contain" fluid={logo.logo.edges[0].node.logo.fluid}/>
          </a>
        </div>
}
