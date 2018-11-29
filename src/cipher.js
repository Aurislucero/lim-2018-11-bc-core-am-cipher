const cifradoAscii =(textPrincipal,offset)=>{
  let acum ='';
  for(let i=0;i<textPrincipal.length;i++){
      let numAscii=textPrincipal.charCodeAt(i);
      //realizar las condiciones
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
  }
  return acum;
};
const decifradoAscii=(textPrincipal,offset)=>{
  let acum ='';
  for(let i=0;i<textPrincipal.length;i++){
      let numAscii=textPrincipal.charCodeAt(i);
      //realizar las condiciones
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

         }

  return acum;
  }
  /*return acum;*/

window.cipher = {
encode : cifradoAscii,
decode : decifradoAscii
};
