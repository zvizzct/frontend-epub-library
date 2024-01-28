import { useState, useEffect } from 'react'
import { BookCard } from './BookCard'

export const ListPopular = ({ books, title, bgcolor }) => {
  const [visibleBooks, setVisibleBooks] = useState([])

  // Actualizar visibleBooks cuando books cambie
  useEffect(() => {
    setVisibleBooks(books.slice(0, 8))
  }, [books])

  const handlePrev = () => {
    const firstVisibleIndex = books.indexOf(visibleBooks[0])
    if (firstVisibleIndex > 0) {
      setVisibleBooks([
        books[firstVisibleIndex - 1],
        ...visibleBooks.slice(0, 7)
      ])
    }
  }

  const handleNext = () => {
    const lastIndex = books.indexOf(visibleBooks[visibleBooks.length - 1])
    if (lastIndex < books.length - 1) {
      setVisibleBooks([...visibleBooks.slice(1), books[lastIndex + 1]])
    }
  }

  const bgColorClass = bgcolor === 'white' ? 'bg-white' : 'bg-gray-200'

  return (
    <div
      className={` mt-20 py-10 w-screen  ${bgColorClass} flex justify-between items-center gap-12`}
    >
      <div className="ml-7 w-50 flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold ml-2">{title}</h2>
        <div className="flex mt-5 gap-5">
          <button
            className="flex justify-center items-center border border-slate-50 bg-gray-200 text-2xl cursor-pointer p-2 my-1 rounded-md w-20 h-20 outline-none shadow-md transition-all duration-200 ease-in hover:bg-gray-300 hover:scale-110 active:bg-gray-300"
            onClick={handlePrev}
          >
            <img
              src="src/assets/arrow-left.png"
              className="w-10 h-10 cursor-pointer"
              alt="Previous"
            />
          </button>
          <button
            className="flex justify-center items-center border border-slate-50 bg-gray-200 text-2xl cursor-pointer p-2 my-1 rounded-md w-20 h-20 outline-none shadow-md transition-all duration-200 ease-in hover:bg-gray-300 hover:scale-110 active:bg-gray-300"
            onClick={handleNext}
          >
            <img
              src="src/assets/arrow-right.png"
              className="w-10 h-10 cursor-pointer"
              alt="Next"
            />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden p-2.5 gap-5 transition-transform duration-500 ease-in">
        {visibleBooks.map((book) => (
          <div className="flex-shrink-0">
            <BookCard key={book.id} book={book} />
          </div>
        ))}
      </div>
    </div>
  )
}
