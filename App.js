
const forecast = () => {
    return {
        places : ['Nelson', 'Cwmcarn', 'Ystrad', 'Cardiff', 'Swansea'],
        weather : ['Sun', 'Rain', 'Cloud Cover', 'Hail', 'Snow'],
        days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        
        getRandomPlace() {
            const randIx = Math.floor(Math.random()* this.places.length);
            return this.places[randIx];
        },

        getRandomWeather() {
            const randIx = Math.floor(Math.random()* this.weather.length);
            return this.weather[randIx];
        },

        getRandomDay() {
            const randIx = Math.floor(Math.random()* this.days.length);
            return this.days[randIx];
        }
    }
}

let dayone = forecast();
console.log(dayone.getRandomPlace())
console.log(dayone.getRandomWeather())
console.log(dayone.getRandomDay())





