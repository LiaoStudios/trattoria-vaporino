import { useEffect, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { MenuPage } from './pages/MenuPage'

// Ogni route rimonta al cambio pagina: basta un fade-in in ingresso.
function Page({ children }: { children: ReactNode }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      {children}
    </motion.main>
  )
}

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname !== '/') window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/menu" element={<Page><MenuPage /></Page>} />
        <Route path="*" element={<Page><Home /></Page>} />
      </Routes>
      <Footer />
    </>
  )
}
