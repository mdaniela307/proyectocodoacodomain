//Función Validación Formulario Newsletter
function validarEmail(){
    var campoEmail = document.getElementById('email-usuario');
    var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
if( emailValido.test(campoEmail.value)){
    alert('¡Suscripción exitosa!');
    return true;
}else{
    alert('Introduzca una dirección de correo válida.');
    return false;
}}


