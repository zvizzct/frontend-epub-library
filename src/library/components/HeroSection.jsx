export const HeroSection = () => {
  return (
    <div className="w-screen flex justify-around items-center h-137 mt-48 px-28">
      <div className="w-1/2 p-5 text-left font-lato">
        <h1 className="font-bold text-5xl text-slate-800 mb-5 ">
          Descubre tu próxima <br />
          <span className="text-violet-400">aventura literaria</span>
        </h1>
        <p className="leading-7 max-w-[500px] text-justify">
          ¿Imaginas un libro de fantasía épica en el siglo 21 o una aventura
          espacial con toques de romance? Nuestra
          <span className="text-violet-600 font-bold">
            {' '}
            inteligencia artificial{' '}
          </span>
          está aquí para ayudarte a encontrar libros basados en tus ideas.
          Describe lo que buscas y te mostraremos títulos fascinantes.
        </p>
        <div className="mt-4 flex flex-col justify-center items-start">
          <textarea
            placeholder="Ej. 'Una historia como El Señor de los Anillos, pero en Marte...'"
            className="mb-2  caret-slate-800 px-4 py-2 w-[500px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-violet-500 transition duration-200"
          />
          <button className="  mt-2 px-6 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition duration-200">
            Encuentra tu libro
          </button>
        </div>
      </div>
      <div className="relative w-1/4 flex justify-center items-center">
        <img
          src="../../src/assets/book-hero.png"
          alt="Libros y lectura"
          className="w-80 h-auto"
        />
      </div>
    </div>
  )
}
