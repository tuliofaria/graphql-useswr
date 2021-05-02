import useSWR from 'swr'
import axios from 'axios'
import { request } from 'graphql-request'

const fetcher = (query) => request('https://rickandmortyapi.com/graphql', query)

const fetcher2 = (query) => {
  // const token = localStorage.getItem('token')
  return axios
    .post('https://rickandmortyapi.com/graphql', { query })
    .then((res) => res.data)
}

export const useQuery = (query) => {
  return useSWR(query, fetcher)
}
