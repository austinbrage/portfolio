import { Layout } from './components/Layout'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { ProjectsPage } from './pages/Projects'
import { Toaster, type ToasterProps } from 'sonner'
import './App.css'

const config: ToasterProps = {
  position: "top-center",
  className: 'toaster',
  richColors: true,
  theme: "dark"
}

function App() {

  return (
    <>
      <Toaster {...{...config}}/>
      <Layout>
        <HomePage/>
        <ProjectsPage/>
        <AboutPage/>
      </Layout>
    </>
  )
}

export default App
