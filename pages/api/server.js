import { request, gql } from 'graphql-request'
const graphqlAPI = 'https://api-ap-south-1.graphcms.com/v2/cl4ksuix25x1y01yrfbijcbhb/master'
export const getBlogs = async () => {
    const query = gql`
    query MyQuery {
        blog {
          id
          slug
          title
          image {
            url
          }
         
          content {
            text
          }
        }
      }
      
      
      
      
    `
    const result = await request(graphqlAPI, query)
    return result.blog
}