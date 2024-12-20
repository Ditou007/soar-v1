import React, { lazy } from 'react'

// Lazy Loaded Components
const Dashboard = lazy(() => import('../Components/Views/Dashboard'))
// const Transactions = lazy(() => import('@/components/Transactions'))
// const Accounts = lazy(() => import('@/components/Accounts'))
const Settings = lazy(() => import('../Components/Views/Settings'))

// Route Configuration
export const routes = [
  { path: '/dashboard', element: Dashboard, title: 'Dashboard' },
  //   { path: '/transactions', element: <Transactions />, title: 'Transactions' },
  //   { path: '/accounts', element: <Accounts />, title: 'Accounts' },
  { path: '/settings', element: Settings, title: 'Settings' },
]
