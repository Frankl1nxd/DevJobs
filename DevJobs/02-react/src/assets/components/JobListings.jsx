import { JobCard } from "./JobCard.jsx"

    
export function JobListings({jobs}) {
    return (
        <>
            <header>
                <h2>Resultados de la busqueda</h2>
            </header>

            <div className="jobs-listings">
                {jobs.map(job => (
                    <JobCard key={job.id} job={job}/>
                ))}

            </div>
        </>
    )
}