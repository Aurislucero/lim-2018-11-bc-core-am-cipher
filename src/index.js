function cifradoAscii(textPrincipal,offset){
    var acum ='';
    for(i=0;i<textPrincipal.length;i++){
        let numAscii=textPrincipal.charCodeAt(i);

         if (numAscii===32){
         acum = acum + String.fromCharCode(numAscii);
         }
         else if(numAscii>=65 && numAscii<=90){
            const numDiferentMayusc = (textPrincipal.charCodeAt(i)-65+parseInt(offset))%26+65;

            acum = acum + String.fromCharCode(numDiferentMayusc );
          }
          else if(numAscii>=97 && numAscii<=122){
             const numDiferentMinusc = ((textPrincipal.charCodeAt(i)-97 + parseInt(offset))%26+97)-32;
             acum = acum + String.fromCharCode(numDiferentMinusc);
           }
         else {
            alert('escribe un mensaje :)');
         }

    }
    return acum;

}

function decifradoAscii(textPrincipal,offset){
  var acum ='';
  for(i=0;i<textPrincipal.length;i++){
      let numAscii=textPrincipal.charCodeAt(i);

       if (numAscii===32){
       acum = acum + String.fromCharCode(numAscii);
       }
       else if(numAscii>=65 && numAscii<=90){
          const numDiferentMayusc = (textPrincipal.charCodeAt(i)-90-parseInt(offset))%26+90;

          acum = acum + String.fromCharCode(numDiferentMayusc );
        }
        else if(numAscii>=97 && numAscii<=122){
           const numDiferentMinusc = ((textPrincipal.charCodeAt(i)-122 - parseInt(offset))%26+122)-32;
           acum = acum + String.fromCharCode(numDiferentMinusc);
         }
       else {
          alert('escribe un mensaje :)');
       }

  }
  return acum;

}


//traer el boton para cifrar y la caja donde se colocara el mensaje
const botonCifrar= document.getElementById('btn-cifrar');
const msjCifradoDecifrado=document.getElementById('msj-cifradoDecifrado');
const botonDecifrar=document.getElementById('btn-decifrar');
const botonSiguiente= document.getElementById('btn-siguiente');

botonSiguiente.addEventListener('click',()=>{

})
//hacer la funcion del cifrado al hacer click en el botón
botonCifrar.addEventListener('click',cifrado);
function cifrado(){
  const  msjPrincipal=document.getElementById('msj-principal').value;
  const  numSecreto=document.getElementById('num-secreto').value;

  msjCifradoDecifrado.innerHTML=cifradoAscii(msjPrincipal,numSecreto);
  document.getElementById('msj-principal').value='';
  document.getElementById('num-secreto').value='';

}
botonDecifrar.addEventListener('click',decifrado);
function decifrado(){
const  msjPrincipal=document.getElementById('msj-principal').value;
const  numSecreto=document.getElementById('num-secreto').value;

msjCifradoDecifrado.innerHTML=decifradoAscii(msjPrincipal,numSecreto);
document.getElementById('msj-principal').value='';
document.getElementById('num-secreto').value='';
}
