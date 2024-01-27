import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className="w-screen py-4 bg-white shadow-md fixed z-50 opacity-90">
      <nav className=" flex justify-between  items-center  px-28  ">
        <Link to="/" className="flex items-center gap-6">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="w-10 rounded-xl bg-opacity-90"
          />
          <h1 className="text-3xl  font-single">
            El <span className="text-violet-500">quiosco</span>
          </h1>
        </Link>
        <div className="flex gap-7">
          <Link to="/libros" className="text-ml font-bold">
            Libros
          </Link>
          <Link to="/autores" className="text-ml font-bold">
            Autores
          </Link>
          <Link to="/libros" className="text-ml font-bold">
            Novedades
          </Link>
          <Link to="/libros" className="text-ml font-bold">
            Recomendaciones
          </Link>
        </div>
      </nav>
    </header>
  )
}
