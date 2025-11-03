/**
 * Auth Store
 * Zustand store for authentication state management
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { AuthState, User } from '@/types/auth.types';

/**
 * Auth Store
 * Manages user authentication state with persistence
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial State
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Login Action (implemented in auth service)
      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          // This will be called from auth.service.ts
          // Service will update store after successful login
          console.log('Login action called with:', credentials.email);
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      // Register Action (implemented in auth service)
      register: async (data) => {
        set({ isLoading: true, error: null });
        try {
          // This will be called from auth.service.ts
          console.log('Register action called with:', data.email);
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      // Logout Action
      logout: async () => {
        set({ isLoading: true });
        try {
          // Clear tokens
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');

          // Clear user state
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });

          console.log('✅ User logged out successfully');
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      // Refresh Token Action (implemented in auth service)
      refreshToken: async () => {
        try {
          // This will be called from api-client.ts interceptor
          console.log('Refresh token action called');
        } catch (error: any) {
          // If refresh fails, logout user
          get().logout();
          throw error;
        }
      },

      // Get Current User Action (implemented in auth service)
      getCurrentUser: async () => {
        set({ isLoading: true, error: null });
        try {
          // This will be called from auth.service.ts
          console.log('Get current user action called');
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      // Change Password Action (implemented in auth service)
      changePassword: async (data) => {
        set({ isLoading: true, error: null });
        try {
          // This will be called from auth.service.ts
          console.log('Change password action called');
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      // Clear Error
      clearError: () => {
        set({ error: null });
      },

      // Set User (used by auth service after successful operations)
      setUser: (user: User | null) => {
        set({
          user,
          isAuthenticated: !!user,
          isLoading: false,
          error: null,
        });
      },
    }),
    {
      name: 'auth-storage', // localStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);

/**
 * Selectors for optimized component re-renders
 */
export const selectUser = (state: AuthState) => state.user;
export const selectIsAuthenticated = (state: AuthState) =>
  state.isAuthenticated;
export const selectIsLoading = (state: AuthState) => state.isLoading;
export const selectError = (state: AuthState) => state.error;

/**
 * Export default
 */
export default useAuthStore;
