
const filter = document.querySelector('#filter-location');
const experienceFilter = document.querySelector('#experience-level ');
const mensaje = document.querySelector('#filter-selected-value');


// ...existing code...
filter.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card');
    const selectedValue = filter.value;

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        mensaje.textContent = '';
    }

    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad;
        const isShown = selectedValue === '' || selectedValue === modalidad

        job.classList.toggle('is-hidden', !isShown); // Mostrar u ocultar según el filtro 
        // !isShown significa que si es true, se muestra, si es false, se oculta. Es lo mismo tambien que isShown === false.
    })
});



experienceFilter.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card');
    const selectedValue = experienceFilter.value;

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        mensaje.textContent = '';
    }

    jobs.forEach(job => {
        const nivel = job.dataset.nivel;
        const isShown = selectedValue === '' || selectedValue === nivel;

        job.classList.toggle('is-hidden', !isShown);
    })
});