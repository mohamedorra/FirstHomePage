let data = new Date()
const day = document.querySelector('div#day')
let dd = data.getDate()
day.innerHTML = `${dd} de`

const monthyear = document.querySelector('div#month-year')
let month = data.getMonth()
month = month == 1 ? 'Janeiro' : month 
month = month == 2 ? 'Fevereiro' : month 
month = month == 3 ? 'Marco' : month 
month = month == 4 ? 'Abril' : month 
month = month == 5 ? 'Maio' : month 
month = month == 6 ? 'Junho' : month 
month = month == 7 ? 'Julho' : month 
month = month == 8 ? 'Agosto' : month 
month = month == 9 ? 'Setembro' : month 
month = month == 10 ? 'Outubro' : month 
month = month == 11 ? 'Novembro' : month 
month = month == 12 ? 'Dezembro' : month 
let year = data.getFullYear()
monthyear.innerHTML = `${month} de ${year}`