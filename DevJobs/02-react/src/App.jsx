
import { useState } from "react"

import { Header } from "./assets/components/Header.jsx"
import { Footer } from "./assets/components/Footer.jsx"

import { HomePage } from "./assets/pages/Home.jsx"
import { SearchPage } from "./assets/pages/Search.jsx"
import { NotFoundPage } from "./assets/pages/404.jsx"

import jobsData from './data.json'

const RESULTS_PER_PAGE = 5

function App() {
    const currentPage = window.location.pathname

    let page = <NotFoundPage />

    if (currentPage === '/home') {
        page = <HomePage />
    } else if (currentPage === '/search') {
        page = <SearchPage />
    }

    return (
        <>
            <Header />

            {page}

            <Footer />

        </>
    )
}

export default App
