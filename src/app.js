const container = document.getElementById("container")

async function loadTours() { 
    const response = await fetch( "https://www.bit-by-bit.ru/api/student-projects/tours")
    const tours = await response.json()

    return tours
}

function renderTours(tours) {
    container.innerHTML=""
        tours.forEach(function(tour){
            container.innerHTML +=`
                <div class="card_hotel">
                    <div>
                        <p class="city">${tour.city}</p>
                        <p class="country">${tour.country}</p>
                        <p class="end_time">${tour.endTime}</p>
                        <h1 class="name_hotel">${tour.hotelName}</h1>
                    </div>
                    <img clas="image" src="${tour.image}" alt="">
                    <div>
                        <p class="price">${tour.price}</p>
                        <p class="rating">${tour.rating}</p>
                        <p class="start_time">${tour.startTime}</p>
                    </div>
            `
        })   
}

function filterByCountry(tours, country) {
    if (country){
        const filteredTours = tours.filter((tour) => {
            return tour.country === country
    })
        renderTours (filteredTours)
    } else {
        renderTours(tours)
}
}

function filterByCity(tours, rating) {
    if (rating){
        const filtredRating = tours.filter((tour) => {
            return tour.rating === rating
        })
        renderTours(filtredRating)
    } else {
        renderTours(tours)
    }
}

async function init() {         //
    const tours = await loadTours()
    renderTours(tours)

    document.getElementById('indonesia').addEventListener('click', () => filterByCountry(tours, 'Индонезия'))
    document.getElementById('thailand').addEventListener('click', () => filterByCountry(tours, 'Тайланд'))
    document.getElementById('maldives').addEventListener('click', () => filterByCountry(tours, 'Мальдивы'))
    document.getElementById('all').addEventListener('click', () => filterByCountry(tours))

    document.getElementById('five_stars').addEventListener('click', () => filterByCity(tours, '5 звёзд'))
}

init()

// сортировки по фильтрам 