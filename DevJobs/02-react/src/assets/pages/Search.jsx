
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
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)

                const params = new URLSearchParams()
                if (textToFilter) params.append('text', textToFilter)
                if (filters.technology) params.append('technology', filters.technology)
                if (filters.location) params.append('type', filters.location)
                if (filters.experienceLevel) params.append('level', filters.experienceLevel)
                
                const offset = (currentPage - 1) * RESULTS_PER_PAGE
                params.append('limit', RESULTS_PER_PAGE)
                params.append('offset', offset)

                const queryParams = params.toString()


                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
                const json = await response.json()

                setJobs(json.data)
                setTotal(json.total)
            } catch (error) {
                console.error('Error fetching jobs data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [filters, textToFilter, currentPage])

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
        loading,
        jobs,
        total,
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
        total,
        loading,
        totalPages,
        currentPage,
        handlePageChange,
        handleSearch,
        handleTextFilter
    } = useFilter()

  


    const title = loading
    ? `Cargando... -DevJobs`
    :` Resultados: ${total}, Pagina: ${currentPage} -DevJOBS`

    return (
        <main>
            <title>{title}</title>
            <meta name="description" content="Explorar miles de oportunidades laborales en el sector tecnologico. Encuentra tu proximo empleo en de DevJobs"/>

            <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

            <section>

                {
                    loading ? <p>Cargando empleos...</p> : <JobListings jobs={jobs} />
                }
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

            </section>
        </main>
    )
}

