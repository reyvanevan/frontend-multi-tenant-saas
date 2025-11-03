import { z } from 'zod'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { isAuthenticated } from '@/lib/route-guards'
import { SignIn } from '@/features/auth/sign-in'

const searchSchema = z.object({
  redirect: z.string().optional(),
})

export const Route = createFileRoute('/(auth)/sign-in')({
  beforeLoad: async () => {
    // If already authenticated, redirect to dashboard
    if (isAuthenticated()) {
      throw redirect({
        to: '/',
      })
    }
  },
  component: SignIn,
  validateSearch: searchSchema,
})
