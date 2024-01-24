import { NavBar } from '../../ui/components/NavBar'
import { BookDetall } from '../components/bookPage/BookDetall'
import { useParams } from 'react-router-dom'

export const BookPage = () => {
  const { id } = useParams()
  return (
    <div className="flex flex-col items-center mx-auto px-4 max-w-7xl">
      <NavBar />
      <BookDetall id={id} />
    </div>
  )
}
