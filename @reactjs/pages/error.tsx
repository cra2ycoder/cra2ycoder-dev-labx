import { ErrorBoundary, ErrorComponent } from '../code/errors/ErrorBoundary'

export default function Error() {
  return (
    <ErrorBoundary>
      <ErrorComponent />
    </ErrorBoundary>
  )
}
