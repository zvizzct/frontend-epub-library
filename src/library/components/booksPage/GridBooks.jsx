import { useEffect, useState } from 'react'
import { BookCard } from '../BookCard'
import { getBooks, getFilters } from '../../services/bookServices'
import { Pagination } from '../../../ui/components/Pagination'
import { useNavigate } from 'react-router-dom'
import { FilterCheckbox } from './FilterCheckbox'
import {
  filterGenres,
  filterLanguages,
  filterThemes,
  filterTypes
} from '../../services/filters'
import { SearchBar } from '../../../ui/components/SearchBar'
import { Filters } from './Filters'

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
    <section className="mt-28 mb-16 w-screen">
      <div className="flex flex-row gap-x-16 justify-start w-10/12 mt-10">
        <section className="flex flex-col gap-2 w-2/12 ml-14">
          <SearchBar />
          <FilterCheckbox
            items={filterGenres}
            label={'Género'}
            type={'checkbox'}
          />
          <FilterCheckbox
            items={filterThemes}
            label={'Tema'}
            type={'checkbox'}
          />
          <FilterCheckbox
            items={filterTypes}
            label={'Tipo'}
            type={'checkbox'}
          />
          <FilterCheckbox
            items={filterLanguages}
            label={'Idioma'}
            type={'radio'}
          />
        </section>
        <section className="flex flex-col flex-grow ml-4">
          <div className="grid grid-cols-5 gap-10">
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
          </div>
        </section>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  )
}
