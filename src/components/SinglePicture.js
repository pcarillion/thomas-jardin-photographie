import React, {useState, useEffect} from 'react'

// css
import styles from '../style/singlepic.module.css'

// plugins
import Img from 'gatsby-image/withIEPolyfill'

const SinglePicture = ({photo, galerie, i}) => {

    console.log(i)

    const [picture, setPicture] = useState(photo)

    const [index, setIndex] = useState(i)

    useEffect(() => {
        setPicture(galerie[index].fluid)
    }, [index])

    return (
        <div className={styles.mainDiv}>
            {index > 0 ? <button className={styles.button} onClick={() => {setIndex(index-1)}}>&lsaquo;</button> :  <button className={styles.button}></button> }
            <Img fluid={picture} objectFit="contain" className={styles.pic} alt={galerie[0].title}/>
            {index +1  < galerie.length  ?  <button className={styles.button} onClick={() => {setIndex(index+1)}}>&rsaquo;</button> :  <button className={styles.button}></button>}
        </div>
    )
}

export default SinglePicture
