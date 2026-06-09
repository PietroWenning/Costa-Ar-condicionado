import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}
