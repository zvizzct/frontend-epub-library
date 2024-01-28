import { NavBar } from '../../ui/components/NavBar'
import { GridBooks } from '../components/booksPage/GridBooks'
import { Footer } from '../../ui/components/Footer'

export const BooksPage = () => {
  return (
    <div className="flex flex-col items-center mx-auto px-4 max-w-7xl">
      <NavBar />
      <GridBooks />
      <Footer />
    </div>
  )
}
