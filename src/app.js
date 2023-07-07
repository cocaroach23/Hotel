const { Container } = require("postcss")

async function appealServ() { 
    const response = await fetch( "https://www.bit-by-bit.ru/api/student-projects/tours")
    const tours = await response.json()
    console.log(tours)
}

function renderTours() {
    Container.innerHTML=""
        tours.foreach(function(tour){
            Container.innerHTML +=`
                <div class="card_hotel">
                    <div>
                        <p class="city">${tour.city}</p>
                        <p class="country">${tour.countru}</p>
                        <p class="end_time">${tour.endTime}</p>
                        <h1 class="name_hotel">${tour.hotelName}</h1>
                    </div>
                    <img clas="image" src="${tour.image} alt="">
                    <div>
                        <p class="price">${trour.price}</p>
                        <p class="rating">${tour.rating}</p>
                        <p class="start_time">${tour.startTime}</p>
                    </div>
            `
        })   
appealServ()

}



renderTours()
appealServ()