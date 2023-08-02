// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// be98b1e6ee2bf138956c97f3792ffddf
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];   
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let $ = document
const inputBox = $.querySelector(".search-box") 
const cityBox = $.querySelector(".city") 
const dateBox = $.querySelector(".date")
const tempBox = $.querySelector(".temp")
const weatherBox = $.querySelector(".weather")
const HighLowBox = $.querySelector(".hi-low")
let city = null
let country = null

inputBox.addEventListener("keydown" , (e)=>{
    if( e.keyCode == 13){
        city = inputBox.value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be98b1e6ee2bf138956c97f3792ffddf`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            inputBox.value = ""
            cityBox.innerHTML = `${city} , ${data.sys.country}`
            let date = new Date()
            dateBox.innerHTML = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
            tempBox.innerHTML = `${Math.floor(data.main.temp - 273)}<span>°c</span>`
            weatherBox.innerHTML = `${data.weather[0].main}`
            HighLowBox.innerHTML = `${Math.floor(data.main.temp_min)-273}<span>°c</span> / ${Math.floor(data.main.temp_max)-273}<span>°c</span>`
        }
        )
        .catch(err => console.log(err))
    }
})
