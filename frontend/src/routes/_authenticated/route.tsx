import { createFileRoute } from '@tanstack/react-router'
import { isAuthenticated } from '@/lib/route-guards'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async () => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      throw new Error('Not authenticated')
    }
  },
  errorComponent: () => {
    // Redirect to login if not authenticated
    return null
  },
  component: AuthenticatedLayout,
})
