import styles from './Pagination.module.css'

export function Pagination({ currentPage = 1, totalPages = 8, onPageChange }) {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const isfirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    const handlePrevClick = (event) => {
        event.preventDefault ()
        if (!isfirstPage) {
            onPageChange(currentPage - 1)
        }
    }

    const handleNextClick = (event) => {
        event.preventDefault ()
        if (!isLastPage) {
            onPageChange(currentPage + 1)
        }
    }

    const handleChangePage = (event) => {
        event.preventDefault()
        const page = Number(event.target.dataset.page)

        if (page !== currentPage) {
            onPageChange(page)
        }
    }

    const buildPageUrl = (page) => {
        const url = new URL(window.location)
        url.searchParams.set('page', page)
        return `${url.pathname}?${url.searchParams.toString()}`
    }

    return (
        <nav className={styles.pagination}>

            <a href={buildPageUrl(currentPage - 1)} onClick={handlePrevClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
            </svg>
            </a>

            {pages.map(page => (
                <a
                    key={page}
                    data-page={page}
                    href={buildPageUrl(page)}
                    className={currentPage === page ? styles['is-active'] : ''}
                    onClick={(event) => handleChangePage(event, page)}
                >
                    {page}
                </a>
            ))}

            <a href={buildPageUrl(currentPage + 1)} onClick={handleNextClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
            </svg></a>

        </nav>
    )
}