import Layout from '@/layout'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        Component: lazy(() => import('@v/home'))
      },
      {
        index: '/entire',
        Component: lazy(() => import('@v/entire'))
      },
      {
        index: '/detail',
        Component: lazy(() => import('@/views/detail/style'))
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router