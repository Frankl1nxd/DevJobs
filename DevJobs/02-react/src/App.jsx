
import { useState } from "react"

import { Header } from "./assets/components/Header.jsx"
import { Footer } from "./assets/components/Footer.jsx"
import { Pagination } from "./assets/components/Pagination.jsx"
import { SearchFormSection } from "./assets/components/SearchFormSection.jsx"
import { JobListings } from "./assets/components/JobListings.jsx"

import jobsData from './data.json'

const RESULTS_PER_PAGE = 5
//TENGO UN PROBLEMA AQUI, AL FILTRAR POR TEXTO ME DEVUELVE EL ARRAY COMPLETO, NO EL FILTRADO.
//VER EL VIDEO DE NUEVO PARA VER SI ME HE PERDIDO ALGO.
function App() {
    const [filters, setFilters] = useState({
        technology: '',
        location: '',
        experienceLevel: ''
    })
    const [textToFilter, setTextToFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const jobsFilteredByFilters = jobsData.filter(job => {
        return (
            (filters.technology === '' || job.data.technology  === filters.technology)
        )
    })


    const jobsWithTextFilter = textToFilter === '' ? jobsFilteredByFilters : jobsFilteredByFilters.filter(job => {
        return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
    })

    const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)

    const pageResults = jobsWithTextFilter.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
    )

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleSearch = (filters) => {
        setFilters(filters) 
        setCurrentPage(1)   

    }

    const handleTextFilter = (newTextToFilter) => {
        setTextToFilter(newTextToFilter)
        setCurrentPage(1)
    }
    return (
        <>
            <Header />

            <main>

                <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

                <section>

                    <JobListings jobs={pageResults} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

                </section>
            </main>

            <Footer />

        </>
    )
}

export default App
