/*Variables for drop down for changing the scales*/
let changeScale = document.querySelector('#js-change-scale');
let selectScale = document.querySelector('.choose-temperature__select');

/*Button for showing the section of scales*/
const showCelsius = document.querySelector('.container__input-celsius');
const showFahrenheit = document.querySelector('.container__input-fahrenheit');
const showKelvin = document.querySelector('.container__input-kelvin');

/*Reading the values of temperature to textboxes*/
let celsius = document.querySelector('#enter-celsius');
let fahrenheit = document.querySelector('#enter-fahrenheit');
let kelvin = document.querySelector('#enter-kelvin');

/*Submit button for conversion of scales*/
const convertCelsius = document.querySelector('.input-temperature__submit-celsius');
const convertFahrenheit = document.querySelector('.input-temperature__submit-fahrenheit');
const convertKelvin = document.querySelector('.input-temperature__submit-kelvin');

/*Display converted temperatures*/
let showConvertedTemperature = document.querySelector('.container__converted-temperature');
let showConvertedCelsius = document.querySelector('#celsius');
let showConvertedFahrenheit = document.querySelector('#fahrenheit');
let showConvertedKelvin = document.querySelector('#kelvin');

const changeScaleFunction = () => {
    if(selectScale.value === 'celsius') {
        /*Display only the Celsius form*/
        showCelsius.style.display = 'block';
        showFahrenheit.style.display = 'none';
        showKelvin.style.display = 'none';
    }
    else if(selectScale.value === 'fahrenheit') {
        /*Display only the Fahrenheit form */
        showCelsius.style.display = 'none';
        showFahrenheit.style.display = 'block';
        showKelvin.style.display = 'none';
    }
    else if(selectScale.value === 'kelvin'){
        /*Display only the Kelvin form*/
        showCelsius.style.display = 'none';
        showFahrenheit.style.display = 'none';
        showKelvin.style.display = 'block';
    }
    else {
        /*Hides the forms*/
        showCelsius.style.display = 'none';
        showFahrenheit.style.display = 'none';
        showKelvin.style.display = 'none';
    }
}

/*Conversion functions*/
const celsiusToFahrenheit = (celsius) => {
    return ((parseInt(celsius.value) * (9/5)) + 32).toFixed(2);
}

const celsiusToKelvin = (celsius) => {
    return (parseInt(celsius.value) + 273.15).toFixed(2);
}

const fahrenheitToCelsius = (fahrenheit) => {
    return ((parseInt(fahrenheit.value) - 32) * (5/9)).toFixed(2);
}

const fahrenheitToKelvin = (fahrenheit) => {
    return (((parseInt(fahrenheit.value) - 32) * (5/9)) + 273.15).toFixed(2);
}

const kelvinToCelsius = (kelvin) => {
    return (parseInt(kelvin.value) - 273.15).toFixed(2);
}

const kelvinToFahrenheit = (kelvin) => {
    return (((parseInt(kelvin.value) - 273.15) * (9/5)) + 32).toFixed(2);
}

/*Event listeners*/
changeScale.addEventListener('click', e => {
    e.preventDefault(); //Cancellation of sending the form
    changeScaleFunction();
    //Remove the values in inputs
    showConvertedCelsius.removeAttribute('value');
    showConvertedFahrenheit.removeAttribute('value');
    showConvertedKelvin.removeAttribute('value');
});

convertCelsius.addEventListener('click', e => {
    showConvertedTemperature.style.display = 'block';
    //Displays the converted temperature
    showConvertedCelsius.setAttribute('value', celsius.value);
    showConvertedFahrenheit.setAttribute('value', celsiusToFahrenheit(celsius));
    showConvertedKelvin.setAttribute('value', celsiusToKelvin(celsius));
});

convertFahrenheit.addEventListener('click', e => {
    showConvertedTemperature.style.display = 'block';
    //Displays the converted temperature
    showConvertedCelsius.setAttribute('value', fahrenheitToCelsius(fahrenheit));
    showConvertedFahrenheit.setAttribute('value', fahrenheit.value);
    showConvertedKelvin.setAttribute('value', fahrenheitToKelvin(fahrenheit));
});

convertKelvin.addEventListener('click', e => {
    showConvertedTemperature.style.display = 'block';
    //Displays the converted temperature
    showConvertedCelsius.setAttribute('value', kelvinToCelsius(kelvin));
    showConvertedFahrenheit.setAttribute('value', kelvinToFahrenheit(kelvin));
    showConvertedKelvin.setAttribute('value', kelvin.value);
});