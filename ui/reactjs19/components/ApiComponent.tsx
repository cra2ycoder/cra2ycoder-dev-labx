import { use } from 'react'

async function fetchDataFromApi() {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'GET',
  })
  return response.json()
}

function ApiComponent() {
  const products = use(fetchDataFromApi())
  return <div>{JSON.stringify(products)}</div>
}

export default ApiComponent
