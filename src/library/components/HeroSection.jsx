export const HeroSection = () => {
  return (
    <div className="flex justify-around items-center w-4/5 h-137 mx-auto mt-20">
      <div className="w-1/2 p-5 text-left">
        <h1>Prueba el recomendador inteligénte</h1>
        <p>
          Descripción o mensaje relevante. Aquí puedes añadir más contenido
          según lo necesites.
        </p>
      </div>
      <div className="relative w-1/4 flex justify-center items-center">
        {/* Custom shapes might need inline styling or separate component */}
        <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-120% h-120% bg-[#dafbf3] rounded-full shadow-[0_0_10px_5px_rgb(226,226,226)] z-[-1]"></div>
        <div className="absolute top-9/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-120% h-40% bg-[rgb(218,243,251)] rounded-full shadow-[0_0_10px_5px_rgb(226,226,226)] z-[-1]"></div>
        <img
          src="../../src/assets/book-hero.png"
          alt="Descripción de la imagen"
          className="w-full h-auto z-10"
        />
      </div>
    </div>
  )
}
