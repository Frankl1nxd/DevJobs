import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"

export function JobDetail() {
    const { jobId } = useParams()
    const navigate = useNavigate()

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https:https://jscamp-api.vercel.app/api/jobs/${jobId}`)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok')
                return response.json()
            })
            .then(json => {
                setJob(json)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [jobId])

    if (loading) {
        return <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
            <div className={styles.loading}>
                <p className={styles.loadingText}>Cargando...</p>
            </div>
        </div>
    }

    if (error || !job) {
        return (
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                <div className={styles.error}>
                    <h2 className={styles.errorTitle}>
                        Oferta no encontrada
                    </h2>
                    <button
                        onClick={() => navigate('/')}
                        className={styles.errorButton}
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <h1>Job Detail</h1>
            <h2>La id es {jobId}</h2>
        </>
    )
}