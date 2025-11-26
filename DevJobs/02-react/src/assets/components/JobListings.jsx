import { JobCard } from "./JobCard.jsx"

    
export function JobListings({jobs}) {
    return (
        <>
            <header>
                <h2>Resultados de la busqueda</h2>
            </header>

            <div className="jobs-listings">
                {jobs.length === 0 && (
                    <p style={{textAlign: "center", padding: "10px", textWrap: "balance"}}>No se han enconterado empleos que coincidan con los criterios de busqueda</p>
                )}
                {jobs.map(job => (
                    <JobCard key={job.id} job={job}/>
                ))}

            </div>
        </>
    )
}