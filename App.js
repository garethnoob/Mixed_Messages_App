
const forecast = {
        places : ['Nelson', 'Cwmcarn', 'Ystrad', 'Cardiff', 'Swansea'],
        weather : ['Sun \u26C5', 'Rain \u2614', 'Cloud Cover \u2601', 'Hail \u25CF', 'Snow \u26C4'],
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
        },

        getRandomForcast() {
            let string = `On ${this.getRandomDay()} there will be ${this.getRandomWeather()} in ${this.getRandomPlace()}.`;
            return string;
        }
}

console.log(forecast.getRandomForcast());
