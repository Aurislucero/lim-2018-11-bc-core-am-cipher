
//traer el boton para cifrar,decifrar y para el botón siguiente
const botonCifrar= document.getElementById('btn-cifrar');
const botonDecifrar=document.getElementById('btn-decifrar');
const botonSiguiente= document.getElementById('btn-siguiente');
//traer la caja de texto para el  mensaje decifrado
const msjCifrado=document.getElementById('msj-cifrado');
const msjDecifrado=document.getElementById('msj-decifrado');
//realizar el evento del boton siguiente
botonSiguiente.addEventListener('click',()=>{


  document.getElementById("pantalla1").style.display='none';
  document.getElementById("pantalla2").style.display='block';
})
//realizar el evento para cifrar al hacer click en el botón
botonCifrar.addEventListener('click',()=>{
  document.getElementById("pantalla2").style.display='none';
  document.getElementById("pantalla3").style.display='block';
  const  msjPrincipal=document.getElementById('msj-principal').value;
  const  numSecreto=document.getElementById('num-secreto').value;
  msjCifrado.innerHTML=cipher.encode(msjPrincipal,numSecreto);
  document.getElementById('msj-principal').value='';
  document.getElementById('num-secreto').value='';
});
//realizar el evento para decifrar al hacer click en el botón
botonDecifrar.addEventListener('click', () =>{
  document.getElementById("pantalla2").style.display='none';
  document.getElementById("pantalla4").style.display='block';
const  msjPrincipal=document.getElementById('msj-principal').value;
const  numSecreto=document.getElementById('num-secreto').value;
msjDecifrado.innerHTML=cipher.decode(msjPrincipal,numSecreto);
document.getElementById('msj-principal').value='';
document.getElementById('num-secreto').value='';
});
