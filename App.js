
const forecast = {
        places : ['Shefeild', 'York', 'London', 'Cardiff', 'Swansea'],
        weather : ['Sun \u26C5', 'Rain \u2614', 'Cloud Cover \u2601', 'Hail \u25CF', 'Snow \u26C4'],
        days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        
        randIx(array) {
            const randIx = Math.floor(Math.random()* array.length);
            return randIx;
        },
        
        getRandomPlace() {
            return this.places[this.randIx(this.places)];
        },

        getRandomWeather() {
            return this.weather[this.randIx(this.weather)];
        },

        getRandomDay() {
            return this.days[this.randIx(this.days)];
        },

        getRandomForcast() {
            let string = `On ${this.getRandomDay()} there will be ${this.getRandomWeather()} in ${this.getRandomPlace()}.`;
            return string;
        }
}

console.log(forecast.getRandomForcast());
