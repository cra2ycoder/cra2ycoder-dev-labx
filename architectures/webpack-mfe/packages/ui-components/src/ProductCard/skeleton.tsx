import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

function ProductCardSkeleton() {
  return (
    <Stack sx={{ height: '100%', padding: '1rem' }} spacing={1}>
      <Skeleton variant="rectangular" width="100%" height={240} />
      <Stack direction="row" justifyContent="space-between">
        <Skeleton variant="rectangular" sx={{ fontSize: '2rem', width: 100 }} />
        <Skeleton variant="rectangular" sx={{ fontSize: '2rem', width: 150 }} />
      </Stack>
      <Stack>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      </Stack>
      <Skeleton variant="rectangular" width={150} height={30} />
      <Skeleton variant="text" sx={{ fontSize: '4rem' }} />
    </Stack>
  )
}

export { ProductCardSkeleton }
export default ProductCardSkeleton
