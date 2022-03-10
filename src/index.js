// console.log('go')
const baseURL = 'http://localhost:3000'
const allFilmsURL = 'http://localhost:3000/films'
const firstFilmURL = 'http://localhost:3000/films/1'


const moviePoster = document.getElementById('poster')
const movieTitle = document.getElementById('title')
const movieRuntime = document.getElementById('runtime')
const movieShowtime = document.getElementById('showtime')
const remainingTicketsGoHere = document.getElementById('ticket-num')

const leftSideMoviesList = document.getElementById('films')

const buyTicketButton = document.getElementById('buy-ticket')



fetch(firstFilmURL)
.then(resp => resp.json())
.then(seeFirstMovieDetails)
.catch(console.error)

function seeFirstMovieDetails(movieObj) {
    // console.log(movieObj)
    moviePoster.src = movieObj.poster
    movieTitle.textContent = movieObj.title
    movieRuntime.textContent = `${movieObj.runtime} minutes`
    movieShowtime.textContent = movieObj.showtime

    const remainingTickets = movieObj.capacity - movieObj.tickets_sold
    remainingTicketsGoHere.textContent = remainingTickets

    buyTicketButton.addEventListener('click', () => {  // THIS IS WHERE I SPENT 45 MIN BANGING MY HEAD AGAINST THE WALL
        console.log(remainingTickets)
        if (remainingTickets > 0){
             remainingTickets -= 1
        remainingTicketsGoHere.textContent = remainingTickets}
    })
    
}



fetch(allFilmsURL)
.then(resp => resp.json())
.then(renderFilmsArray)
.catch(console.error)

function renderFilmsArray(filmsArray) {
    // console.log(filmsArray)
    filmsArray.forEach(displayFilmsList)
}

function displayFilmsList(film) {
    // console.log(film)
    const li = document.createElement('li')
    li.textContent = film.title
    li.className = `film item`
    leftSideMoviesList.append(li)
}

