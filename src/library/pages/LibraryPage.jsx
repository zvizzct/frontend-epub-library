import { useEffect, useState } from 'react'
import { NavBar } from '../../ui/components/NavBar'
import { GenresSection } from '../components/GenresSection'
import { HeroSection } from '../components/HeroSection'
import { ListPopular } from '../components/ListPopular'
import { getBooks } from '../services/bookServices'

export const LibraryPage = () => {
  const [popularBooks, setPopularBooks] = useState([])
  const [trendingBooks, setTrendingBooks] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      try {
        const data = await getBooks(1, 16)
        console.log(data)
        setPopularBooks(data.slice(0, 8))
        setTrendingBooks(data.slice(8, 16))
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])
  return (
    <div className="flex flex-col items-center mx-auto px-4 max-w-7xl ">
      <NavBar />
      <HeroSection />
      <ListPopular books={popularBooks} title={'Más Populares'} />
      <ListPopular
        books={trendingBooks}
        title={'Tendencias'}
        bgcolor={'white'}
      />
      <GenresSection />
    </div>
  )
}
