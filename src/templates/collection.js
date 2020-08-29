import React, {useState} from 'react'

// plugins and tools
import {Link} from 'gatsby'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import AOS from 'aos';
import 'aos/dist/aos.css';
// css
import styles from '../style/collection.module.css'

// js
import Layout from '../components/Layout'
import SinglePicture from '../components/SinglePicture'
import SEO from '../components/SEO'

// data

// const getData = graphql`
// query {
//     collection: contentfulCollection(titre:{eq:"Portraits Ratios variables test"}){
//     titre
//     galerie{
//         title
//         fluid(maxWidth:750){...GatsbyContentfulFluid}
//     }
//   }
// }
// `

const Collection = ({data}) => {

    const collection = data.collection

    const [isOpen, setPic] = useState(false)

    const [photo, setPhoto] = useState("")

    const [index, setIndex] = useState(0)

    const togglePic = (photoLink, x) => {
        setPhoto(photoLink)
        setIndex(x)
        setPic(isOPen => !isOpen)
    }



    return (
        <Layout>
            <SEO title={collection.titre}/>
            <div className={styles.container}>
                <div className={styles.firstRank}>
                    <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[0].fluid, 0)}>
                        <Img fluid={collection.galerie[0].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo1}`} alt={collection.galerie[0].title}/>
                    </div>
                    {collection.galerie[1] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[0].fluid, 1)}>
                        <Img fluid={collection.galerie[1].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo2}`} alt={collection.galerie[1].title}/>
                    </div>}
                </div>
                {collection.galerie[2] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[2].fluid, 2)}>
                    <Img fluid={collection.galerie[2].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo3}`} alt={collection.galerie[2].title}/>
                </div>}
                {collection.galerie[3] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[3].fluid, 3)}>
                    <Img fluid={collection.galerie[3].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo4}`} alt={collection.galerie[3].title}/>
                </div>}
                <div className={styles.lastRank}>
                    {collection.galerie[4] &&<div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[4].fluid, 4)}>
                        <Img fluid={collection.galerie[4].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo5}`} alt={collection.galerie[4].title}/>
                    </div>}
                    {collection.galerie[5] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[5].fluid, 5)}>
                        <Img fluid={collection.galerie[5].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo6}`} alt={collection.galerie[5].title}/>
                    </div>}
                </div>
                {collection.galerie[6] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[6].fluid, 6)}><Img fluid={collection.galerie[6].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo7}`} alt={collection.galerie[6].title}/></div>}
                {collection.galerie[7] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[7].fluid, 7)}><Img fluid={collection.galerie[7].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo8}`} alt={collection.galerie[7].title}/></div>}
                {/* repeat more or less the same pattern if there are more than 8 images */}
                {collection.galerie[8] && <div className={styles.firstRank}>
                    <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[8].fluid, 8)}>
                        <Img fluid={collection.galerie[8].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo1}`} alt={collection.galerie[8].title}/>
                    </div>
                    {collection.galerie[9] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[9].fluid, 9)}>
                        <Img fluid={collection.galerie[9].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo2}`} alt={collection.galerie[9].title}/>
                    </div>}
                </div>}
                {collection.galerie[10] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[10].fluid, 10)}>
                    <Img fluid={collection.galerie[10].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo4}`} alt={collection.galerie[10].title}/>
                </div>}
                {collection.galerie[11] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[11].fluid, 11)}>
                    <Img fluid={collection.galerie[11].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo3}`} alt={collection.galerie[11].title}/>
                </div>}
                {collection.galerie[12] && <div className={styles.lastRank}>
                    {collection.galerie[12] &&<div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[12].fluid, 12)}>
                        <Img fluid={collection.galerie[12].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo5}`} alt={collection.galerie[12].title}/>
                    </div>}
                    {collection.galerie[13] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[13].fluid, 13)}>
                        <Img fluid={collection.galerie[13].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo6}`} alt={collection.galerie[13].title}/>
                    </div>}
                </div>}
                {collection.galerie[14] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[14].fluid, 14)}><Img fluid={collection.galerie[14].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo7}`} alt={collection.galerie[14].title}/></div>}
                {collection.galerie[15] && <div className={styles.intDiv} onClick={()=>togglePic(collection.galerie[15].fluid, 15)}><Img fluid={collection.galerie[15].fluid} objectFit="contain" className={`${styles.photo} ${styles.photo8}`} alt={collection.galerie[15].title}/></div>}
            </div>
            {isOpen && <button type="button" onClick={togglePic} className={styles.close}>X</button>}
            {isOpen && <SinglePicture photo={photo} galerie={collection.galerie} i={index}/>}
        </Layout>
        
    )
}

export const query = graphql`
query($slug:String!) {
    collection: contentfulCollection(slug:{eq:$slug}){
        titre
        galerie{
            title
            fluid(maxWidth:750){...GatsbyContentfulFluid}
        }
    }
}
`


export default Collection
