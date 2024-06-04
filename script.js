const container = document.querySelector("#container");
const kattintasok = document.querySelector("#kattintasok");

let katt_szam = 0;

container.addEventListener("click", function () {
  katt_szam++;
  kattintasok.innerHTML = katt_szam;
});
