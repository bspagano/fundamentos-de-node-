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
//--
console.log("Iniciando el proceso");
hola("barbara ")  
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre)=> {
      console.log("Terminado el proceso");
      
    })
    .catch(error =>{
      console.error("ha sido un error");
      console.error("error");
    })