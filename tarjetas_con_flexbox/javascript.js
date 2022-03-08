document.querySelectorAll(".tarjeta").forEach(function (elemento) {
  elemento.addEventListener("click", function () {
    this.classList.toggle("descubierto");
  });
});
