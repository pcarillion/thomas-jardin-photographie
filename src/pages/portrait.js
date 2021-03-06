import React from 'react'

// css
import styles from '../style/categorie.module.css'

// plugins
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// js 
import Layout from '../components/Layout'
import CategorieList from '../components/CategorieList'
import SEO from '../components/SEO'


const getData = graphql`
query{
  collections: allContentfulCollection(filter:{categorie:{eq:"Portrait"}}){
    edges{ 
        node{
            slug
            titre
            categorie
            mainPicture{
            fluid{...GatsbyContentfulFluid}
        }
        }
        
    }
  }
}
`


const Portrait = () => {

    const collections = useStaticQuery(getData)
    console.log(collections)

    return (
        <Layout>
            <SEO title='Portrait'/>
            <CategorieList data={collections}/>
        </Layout>
    )
}

export default Portrait
