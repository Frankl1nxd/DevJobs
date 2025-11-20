
import { Header } from "./assets/components/Header.jsx"
import { Footer } from "./assets/components/Footer.jsx"

import { HomePage } from "./assets/pages/Home.jsx"
import { SearchPage } from "./assets/pages/Search.jsx"
import { Route } from "./assets/components/Route.jsx"




function App() {

    return (
        <>
            <Header />
            <Route path='/' component={HomePage} />
            <Route path='/search' component={SearchPage} />
            <Footer />
        </>
    )
}

export default App
