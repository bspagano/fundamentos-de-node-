function hola(nombre,resolve) {
  return new Promise(function(resolve,reject) {
      setTimeout (function(){ 
      console.log("hola" + nombre);
      resolve(nombre);
    },1000);
  });
  
}
function hablar (nombre) {
     return new Promise((resolve,reject) => {
      setTimeout(function() {
        console.log("bla bla bla");
        resolve(nombre);
      }, 1000);
     
     });
  
}
function adios (nombre) {
    return new Promise((resolve,reject ) => {
    setTimeout(function() {
      console.log("adios", nombre); 
      resolve(nombre);
    }, 1000);  
  });

}
async function main() {
  await hola ("barbara");
  await hablar();
  await hablar();
  await hablar();
  await adios ();

}
 main();
