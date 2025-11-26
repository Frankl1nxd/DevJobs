import { useId, useState } from "react"

let timeoutId = null

const useSearchForm = ({ idLocation, idExperienceLevel, idTechnology, idText, onSearch, onTextFilter }) => {
    const [searchText, setSearchText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        if (event.target.name === idText) {
            return
        }

        const filters = {
            location: formData.get(idLocation),
            experienceLevel: formData.get(idExperienceLevel),
            technology: formData.get(idTechnology)
        }

        onSearch(filters)
    }

    const handleTextChange = (event) => {
        const text = event.target.value
        setSearchText(text) // actualizamos el input inmediatamente

        // DEBOUNCE: cancelar timeout anterior
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            onTextFilter(text)
        }, 500)
    }

    return {
        handleSubmit,
        handleTextChange,
        searchText,
    }
}

export function SearchFormSection({ onTextFilter, onSearch }) {
    const idText = useId()
    const idLocation = useId()
    const idExperienceLevel = useId()
    const idTechnology = useId()

    const {
        handleSubmit,
        handleTextChange,
    } = useSearchForm({ idLocation, idExperienceLevel, idTechnology, idText, onSearch, onTextFilter })





    return (
        <section className="jobs-search">

            <h1>Encuentra tu proximo trabajo</h1>

            <p>Explora miles de oportunidades en el sector tecnologico</p>

            <form onChange={handleSubmit} id="empleos-search-form" role="search">
                <div className="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>

                    <input name={idText} id="empleos-search-input" type="text" placeholder="Search for jobs by title, skills, or company." onChange={handleTextChange} />

                </div>



                <div className="search-filters">

                    <select name={idTechnology} id="filter-technology">
                        <option value="">Todas las tecnologías</option>

                        <optgroup label="Frontend">
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="javascript">JavaScript</option>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                        </optgroup>

                        <optgroup label="Backend">
                            <option value="node">Node.js</option>
                            <option value="python">Python</option>
                            <option value="php">PHP</option>
                            <option value="java">Java</option>
                        </optgroup>

                        <optgroup label="Base de datos">
                            <option value="mysql">MySQL</option>
                            <option value="mongodb">MongoDB</option>
                            <option value="postgresql">PostgreSQL</option>
                        </optgroup>
                    </select>

                    <select name={idLocation} id="filter-location">
                        <option value="">Ubicacion</option>
                        <option value="remoto">Remoto</option>
                        <option value="presencial">Presencial</option>
                        <option value="hibrido">Hibrido</option>
                    </select>

                    <select name={idExperienceLevel} id="experience-level">
                        <option value="">Experiencia</option>
                        <option value="junior">Junior</option>
                        <option value="semi-senior">Semi-Senior</option>
                        <option value="senior">Senior</option>
                    </select>

                </div>

            </form>

            <span id="filter-selected-value"></span>

        </section>
    )
}