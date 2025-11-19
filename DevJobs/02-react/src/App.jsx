
import { Header } from "./assets/components/Header.jsx"
import { Footer } from "./assets/components/Footer.jsx"

import { HomePage } from "./assets/pages/Home.jsx"
import { SearchPage } from "./assets/pages/Search.jsx"
import { NotFoundPage } from "./assets/pages/404.jsx"
import { useRouter } from "./hooks/useRouter.jsx"




function App() {
    const { currentPath } = useRouter()

    let page = <NotFoundPage />

    if (currentPath === '/home') {
        page = <HomePage />
    } else if (currentPath === '/search') {
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
