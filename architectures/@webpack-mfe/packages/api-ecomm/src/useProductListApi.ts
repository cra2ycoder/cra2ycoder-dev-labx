import { useQuery } from '@tanstack/react-query'

function useProductListApi() {
  const api = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'GET',
      })
      return response.json()
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 5, // 5 minutes
  })

  const getAllProducts = () => {
    // productApi
    api.refetch()
  }

  return {
    state: {
      data: api.data,
      isLoading: api.isLoading,
      isError: api.isError,
      error: api.error,
    },
    actions: {
      getAllProducts,
    },
  }
}

export { useProductListApi }
export default useProductListApi
