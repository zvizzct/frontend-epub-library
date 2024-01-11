export const GenresCard = ({ name, image, color }) => {
  return (
    <div className="w-50 h-62 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-top bg-white transition-transform duration-500 hover:scale-105 cursor-pointer">
      <div
        className="flex justify-center items-center h-full"
        style={{ backgroundColor: color }}
      >
        <img src={image} alt={name} className="w-2/5" />
      </div>
      <p className="block text-black text-lg font-medium p-0">{name}</p>
    </div>
  )
}
