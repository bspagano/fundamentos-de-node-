function hola(nombre,miCallback) {
  setTimeout (function(){
    console.log("hola" + nombre);
    miCallback();
  },1000);
}
function adios (nombre, otrocallback) {
  setTimeout(function() {
    console.log("adios", nombre);
    otrocallback();
  }, 1000);
 
}


console.log("iniciando proceso...");
hola("barbara ",  function (){
  adios("barbara", function(){
    console.log("terminando proceso...");
  });
 
});
