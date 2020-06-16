import React from 'react'

// css
import styles from '../style/video.module.css'

// js
import Layout from '../components/Layout'

const video = () => {
    return (
        <Layout>
            <div className={styles.videoDiv}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_1VWFipQD64" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </Layout>
    )
}

export default video
