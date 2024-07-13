"strict mode";

const umsatz = document.querySelector("#umsatz");
const karte = document.querySelector("#karte");
const gutschein = document.querySelector("#gutschein");
const bargeld = document.querySelector("#bar");
const tipKueche = document.querySelector("#tip-kueche");
const tipBar = document.querySelector("#tip-bar");

document.querySelector("#calc").addEventListener("click", () => {
  bargeld.textContent = `Bargeld: ${
    umsatz.value - karte.value - gutschein.value
  } €`;
  tipKueche.textContent = `Kueche: ${(umsatz.value * 0.015).toFixed(2)} €`;
  tipBar.textContent = `Bar: ${(umsatz.value * 0.015).toFixed(2)} €`;
});
