import React from 'react'

// css
import styles from '../style/categorie.module.css'

// plugins
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// js 
import Layout from '../components/Layout'


const getData = graphql`
query{
  collections: allContentfulCollection{
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


const Categorie = (props) => {

    console.log(props.location.state.data)

    const categorie = props.location.state.data;

    const collections = useStaticQuery(getData)

    console.log(collections.collections.edges)
    
    const selectedCollections = collections.collections.edges.filter(collection => collection.node.categorie === categorie)

    console.log(selectedCollections)



    return (
        <Layout>
            <div className={styles.container}>
                {selectedCollections.map((collection, i) => {
                    return (
                        <div className={styles.imageDiv}>
                            <AniLink to={`/collection/${collection.node.slug}`}><Img className={styles.image} objectFit="contain" fluid={collection.node.mainPicture.fluid}/></AniLink>
                            <h5 className={styles.title}>{collection.node.titre}</h5>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Categorie
