import { useEffect, useState } from 'react'
import { NavBar } from '../../ui/components/NavBar'
import { GenresSection } from '../components/GenresSection'
import { HeroSection } from '../components/HeroSection'
import { ListPopular } from '../components/ListPopular'
import { getBooks } from '../services/bookServices'
import { Footer } from '../../ui/components/Footer'

export const LibraryPage = () => {
  const [popularBooks, setPopularBooks] = useState([])
  const [trendingBooks, setTrendingBooks] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      try {
        const data = await getBooks(1, 28)
        setPopularBooks(data.slice(0, 14))
        setTrendingBooks(data.slice(14, 28))
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
      <ListPopular books={popularBooks} title={'Más populares'} />
      <ListPopular
        books={trendingBooks}
        title={'Tendencias'}
        bgcolor={'white'}
      />
      <GenresSection />
      <Footer />
    </div>
  )
}
