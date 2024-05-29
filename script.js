const container = document.querySelector("#container");
const kattintasok = document.querySelector("#kattintasok");

let katt_szam = 1;

container.addEventListener("click", function () {
  kattintasok.innerHTML = katt_szam;
  katt_szam++;
});
