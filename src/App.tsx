import { Layout } from './components/Layout'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { ProjectsPage } from './pages/Projects'
import './App.css'

function App() {

  return (
    <Layout>
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
    </Layout>
  )
}

export default App
