
import { useEffect, useState } from "react"

import { Pagination } from "../components/Pagination.jsx"
import { SearchFormSection } from "../components/SearchFormSection.jsx"
import { JobListings } from "../components/JobListings.jsx"

import jobsData from '../../data.json'

const RESULTS_PER_PAGE = 5

const useFilter = () => {

    const [filters, setFilters] = useState({
        technology: '',
        location: '',
        experienceLevel: ''
    })
    const [textToFilter, setTextToFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE)

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

    return {
        jobs,
        totalPages,
        currentPage,
        handlePageChange,
        handleSearch,
        handleTextFilter
    }

}

export function SearchPage() {

    const {
        jobs,
        totalPages,
        currentPage,
        handlePageChange,
        handleSearch,
        handleTextFilter
    } = useFilter()

    useEffect(() => {
        document.title = `Resultados ${jobs.length} - Página ${currentPage} -DevJobs`
    }, [jobs, currentPage])



    return (
        <main>

            <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

            <section>

                <JobListings jobs={jobs} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

            </section>
        </main>
    )
}

