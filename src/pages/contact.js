import React from 'react'

// css
import styles from '../style/contact.module.css'

// js
import Layout from '../components/Layout'

// plugins
import Img from 'gatsby-image/withIEPolyfill'
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


// data

const getData = graphql`
query {
    presentation: allContentfulAPropos{edges{node{
        presentation{json}
        photoDeProfil{fluid{...GatsbyContentfulFluid}}
        logo{fluid{...GatsbyContentfulFluid}}
    }}}
  }
`


const Contact = () => {

    const presentation = useStaticQuery(getData)

    console.log(presentation.presentation.edges[0].node.photoDeProfil.fluid)

    return (
        <Layout>
            <div className={styles.container}>
                <Img className={styles.image} objectFit="contain" fluid={presentation.presentation.edges[0].node.photoDeProfil.fluid}/>
                <article>{documentToReactComponents(presentation.presentation.edges[0].node.presentation.json)}</article>
                <section className={styles.contact}>
                        <h3>Contactez-moi</h3>
                        <form className={styles.form} action="https://formspree.io/xqkybrwl" method="POST">
                            <div>
                                <label htmlFor="name">Nom</label>
                                <input type="text" name="name" className={styles.formControl} placeholder="nom"/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className={styles.formControl} placeholder="email"/>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" className={styles.formControl} placeholder="message" rows="40"/>
                            </div>
                            <div>
                                <input type="submit" value="Envoyer" className={styles.submit}/>
                            </div>
                        </form>
                </section>
            </div>
        </Layout>
    )
}

export default Contact
