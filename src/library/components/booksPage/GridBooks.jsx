import { useEffect, useState } from 'react'
import { BookCard } from '../BookCard'
import { getBooks, getFilters } from '../../services/bookServices'
import { Pagination } from '../../../ui/components/Pagination'
import { useNavigate } from 'react-router-dom'
import { FilterInput } from './FilterInput'
import {
  filterGenres,
  filterLanguages,
  filterThemes,
  filterTypes
} from '../../services/filters'
import { SearchBar } from '../../../ui/components/SearchBar'

export const GridBooks = ({ books }) => {
  const [bookList, setbookList] = useState([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      try {
        const data = await getBooks(currentPage, 20)
        setbookList(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [filters, currentPage])

  const handleNavigation = (id) => {
    navigate(`/libros/detalle/${id}`)
  }

  const handleFilter = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    })
  }

  return (
    <section className="mt-10">
      <section className="flex justify-between items-center gap-2">
        <FilterInput
          menuItems={filterGenres}
          filter="Género"
          handleFilter={handleFilter}
          filterType="genre"
        />
        <FilterInput
          menuItems={filterThemes}
          filter="Temas"
          handleFilter={handleFilter}
          filterType="theme"
        />
        <FilterInput
          menuItems={filterTypes}
          filter="Tipo"
          handleFilter={handleFilter}
          filterType="type"
        />
        <FilterInput
          menuItems={filterLanguages}
          filter="Idioma"
          handleFilter={handleFilter}
          filterType="type"
        />

        <SearchBar />
      </section>

      <section className="grid grid-cols-5 gap-10 mt-5 max-w-full">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          bookList.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onClick={() => handleNavigation(book.id)}
            />
          ))
        )}
      </section>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  )
}
