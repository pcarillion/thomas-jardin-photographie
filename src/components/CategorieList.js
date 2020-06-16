
import React from 'react'

// css
import styles from '../style/categorie.module.css'

// plugins
import Img from 'gatsby-image/withIEPolyfill'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const CategorieList = ({data}) => {
    console.log(data.collections.edges !== 0)
    return (
        <div className={styles.container}>
                {data.collections.edges.length !== 0 ? data.collections.edges.map((collection, i) => {
                    return (
                        <div className={styles.imageDiv}>
                            <AniLink fade to={`/collection/${collection.node.slug}`}><Img className={styles.image} objectFit="contain" fluid={collection.node.mainPicture.fluid}/></AniLink>
                            <h5 className={styles.title}>{collection.node.titre}</h5>
                        </div>
                    )
                }) : <div >Il n'y a pas encore de collections dans cette catégorie</div>}
        </div>
    )
}

export default CategorieList
