async function appealServ() { 
    const response = await fetch( "https://www.bit-by-bit.ru/api/student-projects/tours")
    const tours = await response.json()
    console.log(tours)
}