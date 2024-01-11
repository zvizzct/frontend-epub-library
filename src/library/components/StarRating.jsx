export const StarRating = ({ votes }) => {
  const maxVotes = 45
  const normalizedRating = (votes / maxVotes) * 5
  const fullStars = Math.floor(normalizedRating)
  const halfStar = normalizedRating % 1 >= 0.5 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStar

  return (
    <div className="flex text-xl text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="cursor-pointer">
          ★
        </span>
      ))}
      {halfStar === 1 && (
        <span
          className="cursor-pointer"
          style={{
            background: 'linear-gradient(90deg, gold 50%, #ddd 50%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          ★
        </span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="cursor-pointer text-gray-300">
          ★
        </span>
      ))}
    </div>
  )
}
