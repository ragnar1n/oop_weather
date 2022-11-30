const weather=new Weather('Tallinn')

const ui=new UI()

function getWeather(){
    weather.getWeather()
        .then(data=>{
            ui.drawWeather(data)
        })
        .catch(error=> console.log(error))
}

getWeather()