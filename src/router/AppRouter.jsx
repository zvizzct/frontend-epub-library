import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { childAuthRoutes } from '../auth/routes/childAuthRoutes'
import { childLibraryRoutes, LibraryRoutes } from '../library/routes'

const routesConfig = createBrowserRouter([
  {
    path: '/auth/',
    element: <AuthRoutes />,
    children: childAuthRoutes
  },
  {
    path: '/',
    element: <LibraryRoutes />,
    children: childLibraryRoutes
  },

  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
])

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />
}
