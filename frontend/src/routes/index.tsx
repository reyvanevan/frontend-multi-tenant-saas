import { createFileRoute, redirect } from '@tanstack/react-router'
import { isAuthenticated } from '@/lib/route-guards'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    // If authenticated, go to dashboard
    if (isAuthenticated()) {
      throw redirect({
        to: '/dashboard',
      })
    }

    // If not authenticated, go to sign-in
    throw redirect({
      to: '/sign-in',
    })
  },
})
