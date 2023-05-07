const image = document.querySelector("img");
const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

const api = `https://api.qrserver.com/v1/create-qr-code/?data=`;
const api2 = `&size=150x150`;

function gerandoQrCode() {
    p.innerHTML = "Gerando Qr Code";
    setTimeout(QrCodeGerado, 1000);
    image.src = `${api}${input.value}${api2}`;
}

function QrCodeGerado() {
    p.innerHTML = "O Qr Code está pronto para ser lido!";
}

button.addEventListener("click", gerandoQrCode);

button.disabled = true;

input.addEventListener("input", function (event) {
    if (input.value !== null && input.value !== '') {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});