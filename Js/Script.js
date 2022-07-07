

//Buscador de Contenido

//Ejecutando Funciones
var flag = true;
document.getElementById("icon-search").addEventListener("click", () => {
  if (flag) {
    mostrar_buscador();
  } else {
    ocultar_buscador();
  }
});
document.getElementById("ctn-cover-search").addEventListener("click", ocultar_buscador);

//Declarando Variables

bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("ctn-cover-search");
input_search = document.getElementById("inputSearch");
box_search = document.getElementById("boxSearch");


//Funcion para mostrar el buscador

function mostrar_buscador() {
  bars_search.style.top = "4vw";
  cover_ctn_search.style.display = "block";
  input_search.focus();
  flag = false;
}

//Funcion para ocultar el Buscador

function ocultar_buscador() {
  bars_search.style.top = "-9vw";
  cover_ctn_search.style.display = "none";
  input_search.value = "";
  flag = true;
}

//Animación Valores

document.getElementById("divRapidez").addEventListener("mouseenter", () => {
  document.getElementById("divRapidez").classList.remove("animacion");

});


let hrAnimado = document.getElementById("hrAnimacion");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  let alturaHrAnimado = hrAnimado.offsetTop;
  if (alturaHrAnimado + 200 < scrollTop) {
    hrAnimado.classList.add("hrAnimacion")
  }
}

window.addEventListener('scroll', mostrarScroll);
