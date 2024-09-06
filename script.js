const camara = {
  1: "4F313A",
  2: "4F313B",
  3: "4F313C",
  5: "4F313E",
  6: "4F313F",
  7: "4F3140",
  8: "4F3141",
  9: "4F3142",
  10: "4F3143",
  13: "4F323A",
  14: "4F323B",
  16: "4F323C",
};

const rua = {
  A: 44,
  B: 45,
  C: 46,
  D: 47,
  E: 48,
  F: 49,
  G: "4A ",
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
const imgQr = document.querySelector("#img");
const btn = document.querySelector("#gerar");

function gerar() {
  let code = `${camara[camaraIn.value]}${rua[ruaIn.value]}${padrao}${
    primeiroDigito[digito1.value]
  }${segundoDigito[digito2.value]}`;
  imgQr.src = `http://api.qrserver.com/v1/create-qr-code/?data=${code}&size=100x100`;
}

btn.addEventListener("click", gerar);
