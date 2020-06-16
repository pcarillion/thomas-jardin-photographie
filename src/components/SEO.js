import React from 'react'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'


const SEO = ({title}) => {


    return (
        <Helmet title={ `${title} | Thomas Jardin Photographie`} htmlAttributes={{lang:"eng"}}>
            <meta name="description" content={title}/>
            {/* <meta rel="icon" href={image} /> */}
            {/* <meta name="image" content={image}/> */}
        </Helmet>
    )
}

export default SEO
