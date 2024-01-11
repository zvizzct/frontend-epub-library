import { Navigate } from 'react-router-dom'
import { LibraryPage } from '../pages'
import { BookPage } from '../pages/BooksPage'

export const childLibraryRoutes = [
  {
    path: '/',
    element: <LibraryPage />
  },
  {
    path: '/books',
    element: <BookPage />
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
]
