import { useQuery } from '@tanstack/react-query'

function useProductApi(props: any) {
  const { productId } = props

  const api = useQuery({
    queryKey: ['one-product', productId],
    enabled: !!productId,
    queryFn: async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: 'GET',
        }
      )
      return response.json()
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 5, // 5 minutes
  })

  const getProduct = () => {
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
      getProduct,
    },
  }
}

export { useProductApi }
export default useProductApi
