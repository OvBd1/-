const container = document.querySelector('.container')
const pays = document.querySelector('.country')
const img = document.querySelector('img')
const input = document.querySelector('input')
const rollBtn = document.querySelector('.rollBtn')
const answerBtn = document.querySelector('.answerBtn')
const answer = document.querySelector('.answer')
let score = 0
 
const key = 'e6XRsAO2xOhGrWBV1uWzqtVPnCJI1DQYzwVin4q9'
 
function getRandomCountry() {
    axios.get(`https://countryapi.io/api/all?apikey=${key}`)
        .then(response => {
            const countries = response.data;
            const tableau = Object.keys(countries).map(key => countries[key])  
   
            const randomCountry = Math.floor(Math.random() * tableau.length);
            const arrayCountries = tableau[randomCountry]
            const countryName = arrayCountries.name
            const countryFlag = arrayCountries.flag.medium
            const capital = arrayCountries.capital
            answer.textContent = ""
 
           
           
            console.log(compareResult(capital))
 
 
 
   
            pays.textContent = countryName
            img.src = countryFlag    
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des pays:", error);
        });
}
 
rollBtn.addEventListener('click', getRandomCountry);
 
document.addEventListener('DOMContentLoaded', getRandomCountry)
 
 
function compareResult(capital) {
 
    answerBtn.addEventListener('click', () => {
        console.log(input.value + capital)
        if(input.value === capital){
            answer.textContent = "Bonne Réponse"
            let score
           
        } else {
            console.log('non')
            answer.textContent = "Mauvaise Réponse"
        }
    })
}
 
window.addEventListener('keypress', (e) => {
    answerBtn.click()
})