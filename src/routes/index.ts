import React, { lazy } from 'react'

// Lazy Loaded Components
const Dashboard = lazy(() => import('../Components/Views/Dashboard'))
const Settings = lazy(() => import('../Components/Views/Settings'))

// Route Configuration
export const routes = [
  { path: '/dashboard', element: Dashboard, title: 'Dashboard' },
  { path: '/settings', element: Settings, title: 'Settings' },
]
