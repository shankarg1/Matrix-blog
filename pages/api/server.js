import { request, gql } from 'graphql-request'
const graphqlAPI = 'https://api-ap-south-1.graphcms.com/v2/cl4ksuix25x1y01yrfbijcbhb/master'
export const getBlogs = async () => {
    const query = gql`
    query MyQuery {
        blog {
          id
          title
          image {
            url
          }
          excerpt
          content {
            text
          }
          slug
        }
      }
      
      
    `
    const result = await request(graphqlAPI, query)
    return result.blog
}