import { useEffect, useState } from 'react'
import { getBook } from '../../services/bookServices'

export const BookDetall = ({ id }) => {
  const [loading, setLoading] = useState(true)
  const [book, setBook] = useState({})
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBook(id)
        setBook(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])
  console.log(book)

  if (loading) {
    return <div className="text-center">Cargando...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img className="" src={book.imageUrl} alt={book.title} />
        </div>
        <div className="p-4 md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">
            {book.authors.find((author) => author.role === 'escritor')?.name}
          </h2>
          <p className="mb-2">
            {book.authors
              .filter((author) => author.role !== 'escritor')
              .map((author) => `${author.role}: ${author.name}`)
              .join(', ')}
          </p>
          <h1 className="font-bold text-xl mb-2">{book.title}</h1>
          <p className="text-gray-700 text-base mb-4">
            Publicado: {book.publicationDate}
          </p>
          <p className="text-gray-700 text-base mb-4">
            Género: {book.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p className="text-gray-700 text-base mb-4">
            Temas: {book.themes.map((theme) => theme.name).join(', ')}
          </p>
          <p className="text-gray-700 text-base mb-4">Votos: {book.vote}</p>
          <p className="text-gray-700 text-base mb-4">
            Número de páginas: {book.numberOfPages}
          </p>
          <a
            href={book.magnetLink}
            className="text-indigo-600 hover:text-indigo-800"
          >
            Descargar
          </a>
          <div className="mt-4">
            <h2 className="font-bold mb-2">Sinopsis</h2>
            <p className="text-gray-700 text-base">{book.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
