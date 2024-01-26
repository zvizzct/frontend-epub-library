export const GenresCard = ({ name, image, color }) => {
  return (
    <div className="min-w-40 min-h-40 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-top bg-white transition-transform duration-200 hover:scale-105 cursor-pointer">
      <div
        className="w-full h-40 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <img src={image} alt={name} className="w-20" />
      </div>
      <p className="block text-black text-lg font-medium p-2">{name}</p>
    </div>
  )
}
