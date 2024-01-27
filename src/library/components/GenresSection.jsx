// GenresSection.jsx
import { GenresCard } from './GenresCard'

const genres = [
  {
    id: 1,
    name: 'Intriga',
    image: '../../src/assets/genres/mistery.png',
    color: '#B0C4DE' // Azul acero claro, evoca misterio
  },
  {
    id: 2,
    name: 'Policial',
    image: '../../src/assets/genres/black.png',
    color: '#5A7D7C' // Azul polvoriento, asociado con lo policial
  },
  {
    id: 3,
    name: 'Histórico',
    image: '../../src/assets/genres/history.png',
    color: '#D2B48C' // Bronceado, evoca el paso del tiempo
  },
  {
    id: 4,
    name: 'Drama',
    image: '../../src/assets/genres/drama.png',
    color: '#DB7093' // Rosa pálido, asociado con emociones intensas
  },
  {
    id: 5,
    name: 'Fantástico',
    image: '../../src/assets/genres/fantasy.png',
    color: '#DDA0DD' // Ciruela claro, evoca lo mágico y fantástico
  },
  {
    id: 6,
    name: 'Romántico',
    image: '../../src/assets/genres/romantic.png',
    color: '#FFB6C1' // Rosa claro, clásicamente romántico
  },
  {
    id: 7,
    name: 'Ciencia ficción',
    image: '../../src/assets/genres/science-fiction.png',
    color: '#87CEFA' // Azul cielo claro, evoca lo futurista
  },
  {
    id: 8,
    name: 'Juvenil',
    image: '../../src/assets/genres/youth.png',
    color: '#B19CD9' // Lavanda, fresco y juvenil
  },
  {
    id: 9,
    name: 'Aventuras',
    image: '../../src/assets/genres/adventure.png',
    color: '#FFDAB9' // Melocotón, evoca exploración y diversión
  },
  {
    id: 10,
    name: 'Humor',
    image: '../../src/assets/genres/humor.png',
    color: '#F0E68C' // Khaki claro, alegre y desenfadado
  },
  {
    id: 11,
    name: 'Terror',
    image: '../../src/assets/genres/horror.png',
    color: '#CAB8D9' // Gris claro, evoca suspense y misterio
  },
  {
    id: 12,
    name: 'Filosofía',
    image: '../../src/assets/genres/philosophy.png',
    color: '#BCD4E6' // Azul pálido, calmado y reflexivo
  }
  // ... Agrega el resto de géneros aquí si es necesario
]

export const GenresSection = () => {
  return (
    <div className="w-screen mt-10 p-5 bg-gray-200 flex flex-col justify-center items-center gap-5 ">
      <div className="flex flex-col items-center text-gray-800 font-semibold my-5 pt-20">
        <h2 className="text-5xl font-semibold mb-4">Géneros que inspiran</h2>
        <p className="text-lg font-normal">
          Navega por géneros y encuentra tu próxima historia favorita.
        </p>
      </div>
      <div className="  grid gap-10 justify-center items-center grid-cols-6 ">
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
