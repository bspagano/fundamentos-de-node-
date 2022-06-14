const fs = require ("fs");

function leer (ruta,cd) {
  fs.readFile(ruta,(error,data)=>{
    console.log(data.toString());
  }) 
}
function escribir (ruta,contenido,cd ) {
   fs.wriFile(ruta,contenido,function(err,){
     if(err) {
       console.error("no e podido escribirlo",err);
     } else {
       console.log("se a escrito correctamente");
     }

   });
}
 escribir(__dirname+"Archivo.txt","soy un archivo nuevo", console.log);
 //leer(__dirname + "/Archivo.txt")