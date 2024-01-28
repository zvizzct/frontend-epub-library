export const BookCard = ({ book, onClick }) => {
  const { title, authors, genres, vote, imageUrl } = book
  const firstAuthor = authors.find((author) => author.role === 'escritor') || {}

  return (
    <div
      onClick={onClick}
      className="bg-white w-52 h-[380px]  shadow-md hover:shadow-lg hover:bg-violet-100 hover:border-violet-300 transition duration-300 rounded-md cursor-pointer border border-gray-300"
    >
      <div className="flex justify-center pt-5">
        <img
          src={imageUrl}
          alt={`Portada de ${title}`}
          className="max-h-60 rounded-md"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold leading-tight">{title}</h2>
        <p className="my-1 text-gray-700 font-medium">{firstAuthor.name}</p>
      </div>
    </div>
  )
}
