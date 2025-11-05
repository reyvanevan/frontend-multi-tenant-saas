import {
  Building2,
  CreditCard,
  LayoutDashboard,
  LineChart,
  Users,
  ShoppingCart,
  Package,
  Warehouse,
  Store,
  Truck,
  Settings,
  FileText,
  BarChart3,
  Headphones,
  Wrench,
  Eye,
} from 'lucide-react'
import { type NavGroup } from '../types'
import { sidebarData } from './sidebar-data' // Import original template data

/**
 * Get filtered sidebar navigation based on user role
 */
export function getFilteredSidebarData(userRole?: string): NavGroup[] {
  if (!userRole) {
    return getDefaultNavGroups()
  }

  // Platform roles - check specific role first
  switch (userRole) {
    case 'SUPER_ADMIN':
      return getPlatformSuperAdminNavGroups()
    case 'DEVELOPER':
      return getDeveloperNavGroups()
    case 'BILLING_ADMIN':
      return getBillingAdminNavGroups()
    case 'SUPPORT':
      return getSupportNavGroups()
    
    // Tenant roles
    case 'ADMIN':
      return getTenantAdminNavGroups()
    case 'MANAGER':
      return getManagerNavGroups()
    case 'ACCOUNTANT':
      return getAccountantNavGroups()
    case 'CASHIER':
      return getCashierNavGroups()
    case 'VIEWER':
      return getViewerNavGroups()
    
    default:
      return getDefaultNavGroups()
  }
}

// ============================================
// PLATFORM ROLES NAVIGATION
// ============================================

/**
 * Platform SUPER_ADMIN - Full platform access
 */
function getPlatformSuperAdminNavGroups(): NavGroup[] {
  return [
    {
      title: 'Platform Management',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Tenants',
          url: '/tenants',
          icon: Building2,
        },
        {
          title: 'Subscriptions',
          url: '/subscriptions',
          icon: CreditCard,
        },
        {
          title: 'Analytics',
          url: '/analytics',
          icon: BarChart3,
        },
        {
          title: 'Platform Users',
          url: '/users',
          icon: Users,
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: Settings,
        },
      ],
    },
  ]
}

/**
 * DEVELOPER - Full template access for development/testing
 */
function getDeveloperNavGroups(): NavGroup[] {
  return sidebarData.navGroups
}

/**
 * BILLING_ADMIN - Subscriptions and billing only
 */
function getBillingAdminNavGroups(): NavGroup[] {
  return [
    {
      title: 'Billing',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Subscriptions',
          url: '/subscriptions',
          icon: CreditCard,
        },
        {
          title: 'Tenants',
          url: '/tenants',
          icon: Building2,
        },
        {
          title: 'Reports',
          url: '/reports',
          icon: FileText,
        },
      ],
    },
  ]
}

/**
 * SUPPORT - View-only access to help tenants
 */
function getSupportNavGroups(): NavGroup[] {
  return [
    {
      title: 'Support',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Tenants',
          url: '/tenants',
          icon: Building2,
        },
        {
          title: 'Support Tickets',
          url: '/support',
          icon: Headphones,
        },
      ],
    },
  ]
}

// ============================================
// TENANT ROLES NAVIGATION
// ============================================

/**
 * Tenant ADMIN - Full tenant access
 */
function getTenantAdminNavGroups(): NavGroup[] {
  return [
    {
      title: 'Operations',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'POS',
          url: '/pos',
          icon: ShoppingCart,
        },
        {
          title: 'Inventory',
          url: '/inventory',
          icon: Warehouse,
        },
        {
          title: 'Products',
          url: '/products',
          icon: Package,
        },
        {
          title: 'Outlets',
          url: '/outlets',
          icon: Store,
        },
        {
          title: 'Suppliers',
          url: '/suppliers',
          icon: Truck,
        },
      ],
    },
    {
      title: 'Management',
      items: [
        {
          title: 'Reports',
          url: '/reports',
          icon: LineChart,
        },
        {
          title: 'Users',
          url: '/users',
          icon: Users,
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: Settings,
        },
      ],
    },
  ]
}

/**
 * MANAGER - Outlet operations
 */
function getManagerNavGroups(): NavGroup[] {
  return [
    {
      title: 'Operations',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'POS',
          url: '/pos',
          icon: ShoppingCart,
        },
        {
          title: 'Inventory',
          url: '/inventory',
          icon: Warehouse,
        },
        {
          title: 'Products',
          url: '/products',
          icon: Package,
        },
        {
          title: 'Outlets',
          url: '/outlets',
          icon: Store,
        },
        {
          title: 'Reports',
          url: '/reports',
          icon: LineChart,
        },
      ],
    },
  ]
}

/**
 * ACCOUNTANT - Reports and analytics focus
 */
function getAccountantNavGroups(): NavGroup[] {
  return [
    {
      title: 'Analytics',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Reports',
          url: '/reports',
          icon: LineChart,
        },
        {
          title: 'Transactions',
          url: '/transactions',
          icon: FileText,
        },
        {
          title: 'Inventory',
          url: '/inventory',
          icon: Warehouse,
        },
        {
          title: 'Products',
          url: '/products',
          icon: Package,
        },
      ],
    },
  ]
}

/**
 * CASHIER - Limited POS operations
 */
function getCashierNavGroups(): NavGroup[] {
  return [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'POS',
          url: '/pos',
          icon: ShoppingCart,
        },
        {
          title: 'Products',
          url: '/products',
          icon: Package,
        },
      ],
    },
  ]
}

/**
 * VIEWER - Read-only access
 */
function getViewerNavGroups(): NavGroup[] {
  return [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Reports',
          url: '/reports',
          icon: Eye,
        },
      ],
    },
  ]
}

/**
 * Default navigation - shown when role is unknown or not logged in
 */
function getDefaultNavGroups(): NavGroup[] {
  return [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
      ],
    },
  ]
}
