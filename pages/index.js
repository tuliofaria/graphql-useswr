import { useQuery } from '../utils/graphql'
import { gql } from 'graphql-request'

const QUERY = gql`
  query {
    characters(page: 3) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        name
      }
    }
  }
`

const Index = () => {
  const { data, revalidate } = useQuery(QUERY)
  return (
    <>
      <h1>GraphQL</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => revalidate()}>Refresh</button>
    </>
  )
}
export default Index
