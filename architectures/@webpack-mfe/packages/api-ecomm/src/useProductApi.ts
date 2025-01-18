import { useQuery } from '@tanstack/react-query'

function useProductApi() {
  const api = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // fetch products from API
      const response = await fetch('https://fakestoreapi.com/products')
      return response.json()
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 5, // 5 minutes
  })

  const getProducts = () => {
    // productApi
    api.refetch()
  }

  return {
    api,
    getProducts,
  }
}

export { useProductApi }
export default useProductApi
