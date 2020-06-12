import React from "react"

// css
import styles from '../style/home.module.css'

// plugins
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// js
import Layout from '../components/Layout'

// data

const getData = graphql`
query {
    collection: contentfulCollection(titre:{eq:"Portrait Tests"}){
    titre
    galerie{
        title
        fluid(maxWidth:750){...GatsbyContentfulFluid}
    }
  }
}
`


const Home = () =>  {

    const collection = useStaticQuery(getData)

    const galerie = collection.collection.galerie

    return (
    <Layout>
        <div className={styles.homeDiv}>
            <div className={styles.rank}>
                <div className={styles.leftDiv1}>
                    {/* <AniLink to={`/collection/${galerie[0].slug}`}> */}
                        <Img className={styles.image1} objectFit="contain" fluid={galerie[0].fluid}/>
                    {/* </AniLink> */}
                </div>
                <div className={styles.rightDiv1}>
                    {/* <AniLink to={`/collection/${galerie[0].slug}`}> */}
                        <Img className={styles.image2} objectFit="contain" fluid={galerie[1].fluid}/>
                    {/* </AniLink> */}
                </div>
            </div>
            <div className={styles.rank}>
                <div className={styles.leftDiv2}>
                    <div className={styles.crossDiv1}>
                        {/* <AniLink to={`/collection/${galerie[0].slug}`}> */}
                            <Img className={styles.image3} objectFit="contain" fluid={galerie[2].fluid}/>
                        {/* </AniLink> */}
                    </div>
                    <div className={styles.crossDiv2}>
                        {/* <AniLink to={`/collection/${galerie[0].slug}`}> */}
                            <Img className={styles.image4} objectFit="contain" fluid={galerie[3].fluid}/>
                        {/* </AniLink> */}
                    </div>
                </div>
                <div className={styles.rightDiv2}>
                    {/* <AniLink to={`/collection/${galerie[0].slug}`}> */}
                        <Img className={styles.image5} objectFit="contain" fluid={galerie[4].fluid}/>
                    {/* </AniLink> */}
                </div>
            </div>
            <div className={styles.lastRank}>
                <div className={styles.leftDiv3}>
                    {/* <AniLink to={`/collection/${galerie[0].slug}`}> */}
                        <Img className={styles.image6} objectFit="contain" fluid={galerie[5].fluid}/>
                    {/* </AniLink> */}
                </div>
                <div className={styles.rightDiv3}>
                    <div>
                        {/* <AniLink to={`/collection/${galerie[0].slug}`}> */}
                            <Img className={styles.image7} objectFit="contain" fluid={galerie[6].fluid}/>
                        {/* </AniLink> */}
                    </div>
                    <div>
                        {/* <AniLink to={`/collection/${galerie[0].slug}`}> */}
                            {galerie[7] && <Img className={styles.image8} objectFit="contain" fluid={galerie[7].fluid}/>}
                        {/* </AniLink> */}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}

export default Home

 
