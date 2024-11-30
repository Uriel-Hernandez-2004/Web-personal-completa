
const inputCelsius = document.getElementById("celsius");
const inputFahrenheit = document.getElementById("fahrenheit");
const inputKelvin = document.getElementById("kelvin");
const inputRankine = document.getElementById("rankine");
const KELVIN = parseFloat(273.15);
const DECIMALS_TO_PRINT = parseInt(4);
var celsius;
var fahrenheit;
var kelvin;
var rankine;

function getTempValues() {
    celsius = document.getElementById("celsius").value;
    fahrenheit = document.getElementById("fahrenheit").value;
    kelvin = document.getElementById("kelvin").value;
    rankine = document.getElementById("rankine").value;
}

function clearTempValues() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
    document.getElementById("rankine").value = "";
}

inputCelsius.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    getTempValues();
    if (value !== "") {
        fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
        kelvin = parseFloat(celsius) + KELVIN;
        rankine = (parseFloat(celsius) * 9 / 5) + 491.67;
        inputFahrenheit.disabled = true;
        inputKelvin.disabled = true;
        inputRankine.disabled = true;
        document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(DECIMALS_TO_PRINT);
        document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(DECIMALS_TO_PRINT);
        document.getElementById("rankine").value = parseFloat(rankine).toFixed(DECIMALS_TO_PRINT);
    } else {
        inputFahrenheit.disabled = false;
        inputKelvin.disabled = false;
        inputRankine.disabled = false;
        clearTempValues();
    }
})
inputFahrenheit.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    getTempValues();
    if (value !== "") {
        celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
        kelvin = parseFloat(celsius) + KELVIN;
        rankine = parseFloat(fahrenheit) + 459.67;
        inputCelsius.disabled = true;
        inputKelvin.disabled = true;
        inputRankine.disabled = true;
        document.getElementById("celsius").value = parseFloat(celsius).toFixed(DECIMALS_TO_PRINT);
        document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(DECIMALS_TO_PRINT);
        document.getElementById("rankine").value = parseFloat(rankine).toFixed(DECIMALS_TO_PRINT);
    } else {
        inputCelsius.disabled = false;
        inputKelvin.disabled = false;
        inputRankine.disabled = false;
        clearTempValues();
    }
})
inputKelvin.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    getTempValues();
    if (value !== "") {
        celsius = parseFloat(kelvin) - KELVIN;
        fahrenheit = parseFloat(kelvin - KELVIN) * 9 / 5 + 32;
        rankine = parseFloat(kelvin) * 9 / 5;
        inputFahrenheit.disabled = true;
        inputCelsius.disabled = true;
        inputRankine.disabled = true;
        document.getElementById("celsius").value = parseFloat(celsius).toFixed(DECIMALS_TO_PRINT);
        document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(DECIMALS_TO_PRINT);
        document.getElementById("rankine").value = parseFloat(rankine).toFixed(DECIMALS_TO_PRINT);
    } else {
        inputFahrenheit.disabled = false;
        inputCelsius.disabled = false;
        inputRankine.disabled = false;
        clearTempValues();
    }
})
inputRankine.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    getTempValues();
    if (value !== "") {
        celsius = (parseFloat(rankine) - 491.67) * 5 / 9;
        fahrenheit = parseFloat(rankine) - 459.67;
        kelvin = parseFloat(rankine) * 5 / 9;
        inputFahrenheit.disabled = true;
        inputKelvin.disabled = true;
        inputCelsius.disabled = true;
        document.getElementById("celsius").value = parseFloat(celsius).toFixed(DECIMALS_TO_PRINT);
        document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(DECIMALS_TO_PRINT);
        document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(DECIMALS_TO_PRINT);
    } else {
        clearTempValues();
        inputFahrenheit.disabled = false;
        inputKelvin.disabled = false;
        inputCelsius.disabled = false;
    }
})

function tempConvert() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    var kelvin = document.getElementById("kelvin").value;
    var rankine = document.getElementById("rankine").value;
    if (!isNaN(celsius) || !isNaN(fahrenheit) || !isNaN(kelvin)
        || !isNaN(rankine)) {
        alert("¡Digite un valor valido!");
    }
}