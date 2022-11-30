class Weather{
    constructor(city) {
        this.city=city
        this.key='6cec3250795104e5b0a08a43046cdb28'
    }

    async getWeather(){
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData=await response.json()
        return responseData
    }

    changeCity(city){
        this.city=city
    }
}