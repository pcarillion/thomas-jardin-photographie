import React from "react"

// css
import styles from '../style/home.module.css'

// plugins
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// js
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// data

const getData = graphql`
query{
    collection: allContentfulCollection(limit:8){
      edges{ 
          node{
          slug
          titre
          mainPicture{
            fluid{...GatsbyContentfulFluid}
          }
        }
      }
    }
  }
`


const Home = () =>  {

    const collection = useStaticQuery(getData)


    const galerie = collection.collection.edges


    return (
    <Layout>
        <SEO title='Thomas Jardin Photographie'/>
        <div className={styles.homeDiv}>
            <div className={styles.rank}>
                <div className={styles.leftDiv1}>
                    <AniLink fade to={`/collection/${galerie[0].node.slug}`}>
                        <Img className={styles.image1} objectFit="contain" fluid={galerie[0].node.mainPicture.fluid}/>
                    </AniLink>
                    <p className={styles.title}>{galerie[0].node.titre}</p>
                </div>
                <div className={styles.rightDiv1}>
                    <AniLink fade to={`/collection/${galerie[1].node.slug}`}>
                        <Img className={styles.image2} objectFit="contain" fluid={galerie[1].node.mainPicture.fluid}/>
                    </AniLink>
                    <p className={styles.title}>{galerie[1].node.titre}</p>
                </div>
            </div>
            <div className={styles.rank}>
                <div className={styles.leftDiv2}>
                    <div className={styles.crossDiv1}>
                        <AniLink fade to={`/collection/${galerie[2].node.slug}`}>
                            <Img className={styles.image3} objectFit="contain" fluid={galerie[2].node.mainPicture.fluid}/>
                        </AniLink>
                        <p className={styles.title}>{galerie[2].node.titre}</p>
                    </div>
                    <div className={styles.crossDiv2}>
                        <AniLink fade to={`/collection/${galerie[3].node.slug}`}>
                            <Img className={styles.image4} objectFit="contain" fluid={galerie[3].node.mainPicture.fluid}/>
                        </AniLink>
                        <p className={styles.title}>{galerie[3].node.titre}</p>
                    </div>
                </div>
                <div className={styles.rightDiv2}>
                    <AniLink fade to={`/collection/${galerie[4].node.slug}`}>
                        <Img className={styles.image5} objectFit="contain" fluid={galerie[4].node.mainPicture.fluid}/>
                    </AniLink>
                    <p className={styles.title}>{galerie[4].node.titre}</p>
                </div>
            </div>
            <div className={styles.lastRank}>
                <div className={styles.leftDiv3}>
                    <AniLink fade to={`/collection/${galerie[5].node.slug}`}>
                        <Img className={styles.image6} objectFit="contain" fluid={galerie[5].node.mainPicture.fluid}/>
                    </AniLink>
                    <p className={styles.title}>{galerie[5].node.titre}</p>
                </div>
                <div className={styles.rightDiv3}>
                    {galerie[6] && <div>
                        <AniLink fade to={`/collection/${galerie[6].node.slug}`}>
                            <Img className={styles.image7} objectFit="contain" fluid={galerie[6].node.mainPicture.fluid}/>
                        </AniLink>
                        <p className={styles.title}>{galerie[6].node.titre}</p>
                    </div>}
                    {galerie[7] && <div>
                        <AniLink fade to={`/collection/${galerie[7].node.slug}`}>
                            {galerie[7] && <Img className={styles.image8} objectFit="contain" fluid={galerie[7].node.mainPicture.fluid}/>}
                        </AniLink>
                        <h5 className={styles.title}>{galerie[7].node.titre}</h5>
                    </div>}
                </div>
            </div>
        </div>
    </Layout>
    )
}

export default Home

 
