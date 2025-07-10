// DOM

const container = document.querySelector(".main-table");
const btn = document.querySelector(".in-table button");
const qrCodeInput = document.querySelector(".in-table input");
const qrCodeImg = document.querySelector("#qr-code img");

// Eventos 


// Gerar QR Code 
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value.trim();
    if (!qrCodeInputValue) return;

    btn.innerText = "Gerando Código...";

    // Força o navegador a recarregar a imagem mesmo que o valor seja igual ao anterior
    const timestamp = new Date().getTime();

    // Define o que acontece após a imagem carregar
    qrCodeImg.onload = () => {
        container.classList.add("active");
        btn.innerText = "Código criado!";
    };

    // Define a nova URL da imagem com timestamp
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeInputValue)}&t=${timestamp}`;
}

btn.addEventListener("click", generateQrCode);

qrCodeInput.addEventListener("keydown", (e) =>{
    if (e.code === "Enter") {
        generateQrCode();
    }
});

// Limpar área do QR code 

qrCodeInput.addEventListener("input", () => {
    if (qrCodeInput.value === "") {
        btn.innerText = "Gerar QR Code";
        container.classList.remove("active");
    }
});