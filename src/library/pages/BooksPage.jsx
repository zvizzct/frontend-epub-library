import { NavBar } from '../../ui/components/NavBar'
import { SearchBar } from '../../ui/components/SearchBar'
import { GridBooks } from '../components/booksPage/GridBooks'

export const BookPage = () => {
  return (
    <div className="flex flex-col items-center mx-auto px-4 max-w-7xl">
      <NavBar />
      <SearchBar />
      <GridBooks />
    </div>
  )
}
