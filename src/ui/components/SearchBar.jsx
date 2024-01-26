export const SearchBar = () => {
  return (
    <>
      <div className="relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <img className="w-5 opacity-50" src="src/assets/BUSCAR.png"></img>
        </button>
      </div>
    </>
  )
}
