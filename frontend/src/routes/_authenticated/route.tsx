import { createFileRoute, redirect } from '@tanstack/react-router'
import { isAuthenticated } from '@/lib/route-guards'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ location }) => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      // Redirect to sign-in with the current location as redirect target
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: AuthenticatedLayout,
})
