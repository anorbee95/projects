import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
