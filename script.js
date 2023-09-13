function muunnaLampotila() {
    var lampotilaInput = document.getElementById("lampotila");
    var lampotila = parseFloat(lampotilaInput.value);

    if (isNaN(lampotila)) {
        naytaVirhe("Virhe: Syötä kelvollinen lämpötila.");
        return;
    }

    var muunnosValinta = document.getElementById("muunnos");
    var valittuMuunnos = muunnosValinta.options[muunnosValinta.selectedIndex].value;

    var desimaalitValinta = document.querySelector('input[name="desimaalit"]:checked');
    var valittuTarkkuus = parseInt(desimaalitValinta.value);

    var tulos = suoritaMuunnos(valittuMuunnos, lampotila, valittuTarkkuus);

    naytaTulos(tulos);
}


function naytaVirhe(viesti) {
    document.getElementById("tulos").innerHTML = viesti;
}


function suoritaMuunnos(muunnos, lampotila, tarkkuus) {
    if (muunnos === "celsiusToFahrenheit") {
        var fahrenheit = (lampotila * 9/5) + 32;
        return "Lämpötila Celsius-asteina: " + lampotila.toFixed(tarkkuus) + "°C<br>Lämpötila Fahrenheit-asteina: " + fahrenheit.toFixed(tarkkuus) + "°F";
    } else if (muunnos === "fahrenheitToCelsius") {
        var celsius = (lampotila - 32) * 5/9;
        return "Lämpötila Fahrenheit-asteina: " + lampotila.toFixed(tarkkuus) + "°F<br>Lämpötila Celsius-asteina: " + celsius.toFixed(tarkkuus) + "°C";
    }
}


function naytaTulos(tulos) {
    document.getElementById("tulos").innerHTML = tulos;
}