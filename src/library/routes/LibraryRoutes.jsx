import { Outlet } from 'react-router-dom'
export const LibraryRoutes = () => {
  return (
    <>
      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  )
}
