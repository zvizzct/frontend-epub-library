// GenresSection.jsx
import { GenresCard } from './GenresCard'

const genres = [
  {
    id: 1,
    name: 'Ciencia Ficción',
    image: '../../src/assets/genres/science-fiction.png',
    color: '#A0D2DB'
  },
  {
    id: 2,
    name: 'Fantasía',
    image: '../../src/assets/genres/fantasy.png',
    color: '#fff196'
  },
  {
    id: 3,
    name: 'Drama',
    image: '../../src/assets/genres/drama.png',
    color: '#89ABE3'
  },
  {
    id: 4,
    name: 'Terror',
    image: '../../src/assets/genres/horror.png',
    color: '#C7B198'
  },
  {
    id: 5,
    name: 'Aventura',
    image: '../../src/assets/genres/adventure.png',
    color: '#98DFAF'
  },
  {
    id: 6,
    name: 'Romance',
    image: '../../src/assets/genres/romantic.png',
    color: '#FFC0CB'
  },
  {
    id: 7,
    name: 'Histórico',
    image: '../../src/assets/genres/history.png',
    color: '#F7BA84'
  },
  {
    id: 8,
    name: 'Humor',
    image: '../../src/assets/genres/humor.png',
    color: '#C3B1E1'
  },
  {
    id: 9,
    name: 'Intriga',
    image: '../../src/assets/genres/mistery.png',
    color: '#FF6B6B'
  },
  {
    id: 10,
    name: 'Policial',
    image: '../../src/assets/genres/black.png',
    color: '#B0A8B9'
  }
  // ... Agrega el resto de géneros aquí
]

export const GenresSection = () => {
  return (
    <div className="mt-20 bg-gray-200">
      <div className="flex flex-col items-center text-gray-800 font-semibold my-10 pt-20">
        <h2 className="text-5xl font-semibold mb-0">Géneros que inspiran</h2>
        <p className="text-lg font-normal">
          Navega por géneros y encuentra tu próxima historia favorita.
        </p>
      </div>
      <div className="w-3/5 mx-auto grid gap-8 justify-center items-center grid-cols-repeat-auto-fit-minmax-200px p-5">
        {genres.map((genre) => (
          <GenresCard
            key={genre.id}
            name={genre.name}
            image={genre.image}
            color={genre.color}
          />
        ))}
      </div>
    </div>
  )
}
