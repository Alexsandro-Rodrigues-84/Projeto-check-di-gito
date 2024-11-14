const camara = {
  1: "4F313A",
  2: "4F313B",
  3: "4F313C",
  5: "4F313E",
  6: "4F313F",
  7: "4F3140",
  8: "4F3141",
  9: "4F3142",
  10: "4F323",
  13: "4F323C",
  14: "4F323D",
  16: "4F323F",
  29: "4F3342",
};

const rua = {
  A: 44,
  B: 45,
  C: 46,
  D: 47,
  E: 48,
  F: 49,
  G: "4A",
  H: "4B",
  I: "4C",
  J: "4D",
  K: "4E",
  L: "4F",
  M: "50",
  N: "51",
};

const primeiroDigito = {
  0: "3D",
  1: "3E",
  2: "3F",
  3: 40,
  4: 41,
  5: 42,
};

const segundoDigito = {
  0: "3B",
  1: "3C",
  2: "3D",
  3: "3E",
  4: "3F",
  5: 40,
  6: 41,
  7: 42,
  8: 43,
  9: 44,
};

const padrao = 60;

const camaraIn = document.querySelector("#camara");
const ruaIn = document.querySelector("#rua");
const digito1 = document.querySelector("#primeiroDigito");
const digito2 = document.querySelector("#segundoDigito");
const nivel = document.querySelector("#nivel");
const descripitionLocation = document.querySelector("#description-location");
const descripitionCheck = document.querySelector("#description-check");
const locationQr = document.querySelector("#location-code");
const checkQr = document.querySelector("#check-code");
const btn = document.querySelector("#gerar");

function gerarLocation() {
  let camaraLocation = "";
  if (camaraIn.value < 10) {
    camaraLocation = 0 + camaraIn.value;
  } else {
    camaraLocation = camaraIn.value;
  }

  const location = `C${camaraLocation}${ruaIn.value}Q${digito1.value}${digito2.value}N${nivel.value}`;
  locationQr.src = `http://api.qrserver.com/v1/create-qr-code/?data=${location}&size=250x250`;
  descripitionLocation.innerText = location;
}

function gerarCheckDigito() {
  const code = `${camara[camaraIn.value]}${rua[ruaIn.value]}${padrao}${
    primeiroDigito[digito1.value]
  }${segundoDigito[digito2.value]}`;
  checkQr.src = `http://api.qrserver.com/v1/create-qr-code/?data=${code}&size=250x250`;
  descripitionCheck.innerText = code;
  camaraIn.value = "";
  ruaIn.value = "";
  digito1.value = "";
  digito2.value = "";
  nivel.value = "";
}

btn.addEventListener("click", () => {
  gerarLocation();
  gerarCheckDigito();
});
