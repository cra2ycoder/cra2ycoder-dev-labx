import { ErrorBoundary, ErrorComponent } from '@/errors/ErrorBoundary'

export default function Error() {
  return (
    <ErrorBoundary>
      <ErrorComponent />
    </ErrorBoundary>
  )
}
