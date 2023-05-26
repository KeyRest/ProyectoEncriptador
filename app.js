const inputText = document.getElementById("inputText");
const output = document.getElementById("output");
const copyButon = document.getElementById("copy");
const errorImage = document.getElementById("errorImage");

function encriptar() {
    let texto = inputText.value;
    if (texto !== "") {
        output.textContent = codificador(texto);
        copyButon.style.display = "flex";
        output.style.display = "flex";
        errorImage.style.display = "none";
    } else {
        copyButon.style.display = "none";
        output.style.display = "none";
        errorImage.style.display = "flex";
    }
}

function desencriptar() {
    let texto = inputText.value;
    if (texto !== "") {
        output.textContent = decodificador(texto);
        copyButon.style.display = "flex";
        output.style.display = "flex";
        errorImage.style.display = "none";
    } else {
        copyButon.style.display = "none";
        output.style.display = "none";
        errorImage.style.display = "flex";
    }

}

function copiar() {
    if (output.textContent != "") {
        navigator.clipboard.writeText(output.textContent);
    } else {
        alert("No hay nada para copiar");
    }
}

function codificador(texto) {

    const map = new Map();
    map.set('e', 'enter');
    map.set('i', 'imes');
    map.set('a', 'ai');
    map.set('o', 'ober');
    map.set('u', 'ufat');

    if (texto != texto.toLowerCase()) {
        return alert("Porfavor escriba en minuscula");
    }

    if (revisorCE(texto)) {
        return alert("No se aceptan caracteres especiales");
    }

    texto = texto.trim('').toLowerCase().split("");

    for (let i = 0; i < texto.length; i++) {
        if (map.has(texto[i])) {
            texto[i] = map.get(texto[i]);
        }
    }

    return texto.join("");
};

function decodificador(texto) {

    if (texto != texto.toLowerCase()) {
        return alert("Porfavor escriba en minuscula");
    }

    if (revisorCE(texto)) {
        return alert("No se aceptan caracteres especiales");
    }

    texto = texto.trim('').toLowerCase().split("");

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u') {
            texto.splice(i + 1, 3)
        } if (texto[i] == 'a') {
            texto.splice(i + 1, 1)
        } if (texto[i] == 'e') {
            texto.splice(i + 1, 4)
        }

    }

    return texto.join("");
};

function revisorCE(texto) { //Revisa si existe un caracter especial en el texto y devuelvo true o false

    const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    texto = texto.replaceAll(' ', '').toLowerCase().split("");

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (letras.includes(texto[i])) {
            contador++;
        }
    }

    if (contador != texto.length) {
        return true;
    }

    return false;
}
