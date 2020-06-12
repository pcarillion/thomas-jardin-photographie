const path = require("path")

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions ;
    const { data } = await graphql(`
    query{
    collections: allContentfulCollection{
    edges{ 
    	node{slug}
    }
  }
}
`)

data.collections.edges.forEach(({node}) =>{
        createPage({
            path: `collection/${node.slug}`,
            component: path.resolve("./src/templates/collection.js"),
            context:{
                slug: node.slug
            },
            
        })
    })
}