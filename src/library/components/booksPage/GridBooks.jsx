import { useEffect, useState } from 'react'
import { BookCard } from '../BookCard'
import { getBooks } from '../../services/bookServices'
import { Pagination } from '../../../ui/components/Pagination'

export const GridBooks = ({ books }) => {
  const [bookList, setbookList] = useState([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

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
  console.log(currentPage)
  return (
    <section className="mt-10">
      <section className="grid grid-cols-5 gap-10">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          bookList.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </section>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  )
}
