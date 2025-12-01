import { Route, Routes } from "react-router-dom"

import { Header } from "./assets/components/Header.jsx"
import { Footer } from "./assets/components/Footer.jsx"

import { HomePage } from "./assets/pages/Home.jsx"
import { SearchPage } from "./assets/pages/Search.jsx"
import { NotFoundPage } from "./assets/pages/404.jsx"
import { JobDetail } from "./assets/pages/Detail.jsx"





function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/jobs/:jobId' element={<JobDetail />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
