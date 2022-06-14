function hola(nombre,miCallback) {
  setTimeout (function(){
    console.log("hola" + nombre);
    miCallback(nombre);
  },1000);
}
function hablar (Callbackhablar) {
  setTimeout(function() {
    console.log("bla bla bla");
    Callbackhablar();
  }, 1000);
 
}


function adios (nombre, otrocallback) {
  setTimeout(function() {
    console.log("adios", nombre); 
    otrocallback();
  }, 1000);
 
}
function conversacion( nombre,veces, callback) {
    if (veces >=0) {
      hablar(function(){
        conversacion(nombre,--veces, callback);
          
    });
    } else {
      adios(nombre,callback);
    } 

}
   
//---

console.log("iniciando proceso...");
hola("barbara ",  function (nombre){
    conversacion(nombre,3 , function() {
        console.log(" proceso terminamos");
   });
    
  })
// hola("barbara ",  function (nombre){
//   hablar(function () {
//       adios(nombre, function() {
//       console.log("terminando proceso...");
//     });
    
//   }); 
  
 //})
 
