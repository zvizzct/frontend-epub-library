import { Navigate } from 'react-router-dom'
import { LibraryPage } from '../pages'
import { BooksPage } from '../pages/BooksPage'
import { BookPage } from '../pages/BookDetallPage'

export const childLibraryRoutes = [
  {
    path: '/',
    element: <LibraryPage />
  },
  {
    path: '/libros',
    element: <BooksPage />
  },
  {
    path: '/libros/detalle/:id',
    element: <BookPage />
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
]
