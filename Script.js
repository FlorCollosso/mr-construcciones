




                              //Buscador de Contenido

  //Ejecutando Funciones

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("ctn-cover-search").addEventListener("click", ocultar_buscador);

  //Declarando Variables

  bars_search =       document.getElementById("ctn-bars-search");
  cover_ctn_search =  document.getElementById("ctn-cover-search");
  input_search =      document.getElementById("InputSearch");
  box_search =        document.getElementsById("BoxSearch");


   //Funcion para mostrar el buscador

   function mostrar_buscador(){
     bars_search.style.top= "4vw";
     cover_ctn_search.style.display= "block";
     input_search.focus();
   }

   //Funcion para ocultar el Buscador

   function ocultar_buscador(){
     bars_search.style.top= "-9vw";
     cover_ctn_search.style.display= "none";
     input_search.value= "";
   }
