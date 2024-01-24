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
    path: '/books',
    element: <BooksPage />
  },
  {
    path: '/books/detall/:id  ',
    element: <BookPage />
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
]
