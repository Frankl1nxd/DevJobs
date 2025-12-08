import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { Header } from "./assets/components/Header.jsx"
import { Footer } from "./assets/components/Footer.jsx"

const HomePage = lazy(() => import('./assets/pages/Home.jsx'))
const SearchPage = lazy(() => import('./assets/pages/Search.jsx'))
const NotFoundPage = lazy(() => import('./assets/pages/404.jsx'))
const JobDetail = lazy(() => import('./assets/pages/Detail.jsx'))




function App() {

    return (
        <>
            <Header />

            <Suspense fallback={<div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>Cargando...</div>}>

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/jobs/:jobId' element={<JobDetail />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>

            </Suspense>

            <Footer />
        </>
    )
}

export default App
