import { StarRating } from './StarRating'

export const BookCard = ({ book }) => {
  const { title, authors, genres, themes, types, vote, imageUrl } = book
  return (
    <div className="w-40 border border-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer flex flex-col justify-around">
      <img
        src={imageUrl}
        alt={`Portada de ${title}`}
        className="w-full h-70 object-cover"
      />
      <div className="p-4">
        <h2 className="m-0 text-sm">{title}</h2>
        <p className="my-1 text-sm text-gray-700 font-medium">{authors.role}</p>
        <p className="my-1 text-xs text-gray-700 font-light italic">
          {themes.map((theme) => theme.name).join(', ')}
        </p>
        {/* <StarRating votes={vote} /> */}
      </div>
    </div>
  )
}
