//traer el boton para cifrar,decifrar y para el botón siguiente
const botonCifrar= document.getElementById('btn-cifrar');
const botonDecifrar=document.getElementById('btn-decifrar');


//traer la caja de texto para el  mensaje decifrado
const msjResult=document.getElementById("resultado");
//realizar el evento para cifrar al hacer click en el botón
botonCifrar.addEventListener('click',()=>{
const  msjPrincipal=document.getElementById('msj-principal').value;
const  numSecreto=document.getElementById('num-secreto').value;
msjResult.innerHTML=cipher.encode(msjPrincipal,numSecreto);
document.getElementById('msj-principal').value='';
document.getElementById('num-secreto').value='';
});
//realizar el evento para decifrar al hacer click en el botón
botonDecifrar.addEventListener('click', () =>{
const  msjPrincipal=document.getElementById('msj-principal').value;
const  numSecreto=document.getElementById('num-secreto').value;
msjResult.innerHTML=cipher.decode(msjPrincipal,numSecreto);
document.getElementById('msj-principal').value='';
dsocument.getElementById('num-secreto').value='';
});
