const ls=new LS()
const initialCity=ls.getCity()

const weather=new Weather(initialCity)

const ui=new UI()



const form=document.querySelector('#change-city')
form.addEventListener('submit',changeWeather)

function changeWeather(event){
    const city=document.querySelector('#city-name').value
    weather.changeCity(city)
    ls.setCity(city)
    getWeather()
    document.querySelector('#city-name').value=''
    event.preventDefault()
}

function getWeather(){
    weather.getWeather()
        .then(data=>{
            ui.drawWeather(data)
        })
        .catch(error=> console.log(error))
}

getWeather()