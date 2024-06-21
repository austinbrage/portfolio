import { HomePage } from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>  
  }
])

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
