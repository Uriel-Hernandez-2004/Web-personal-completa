var div = document.getElementById('cards');
div.style.display = 'none';

function showImage(value) {
    let displayImage = document.getElementById('image');
    if (parseFloat(value) < 18.5) {
        displayImage.src = 'IMG/01 Bajo Peso.png';
    } else if (18.5 <= parseFloat(value) && parseFloat(value) < 25) {
        displayImage.src = 'IMG/02 Normal.png';
    } else if (25 <= parseFloat(value) && parseFloat(value) < 30) {
        displayImage.src = 'IMG/03 Sobrepeso.png';
    } else if (30 <= parseFloat(value) && parseFloat(value) < 35) {
        displayImage.src = 'IMG/04 Obesidad I.png';
    } else if (35 <= parseFloat(value) && parseFloat(value) < 40) {
        displayImage.src = 'IMG/05 Obesidad II.png';
    } else {
        displayImage.src = 'IMG/06 Obesidad III.png';
    }
}

function calculateIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var estaturaMetros = parseFloat(document.getElementById('estaturaMetros').value);
    var imc;
    if (document.getElementById('peso').value == "" || document.getElementById('estaturaMetros').value == "") {
        alert("Los campos no deben estar vaciós.");
    } else if (peso < 0 || estaturaMetros < 0) {
        alert("Los valores deben ser distintos de 0.");
    } else {
        imc = peso / (parseFloat(estaturaMetros) * estaturaMetros);
        div.style.display = 'block';
        showImage(imc);
        document.getElementById("imc").textContent = `IMC: ${imc.toFixed(2)}`;
    }
}