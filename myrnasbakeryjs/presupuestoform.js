//Esta función evalua que no estén vacíos los campos de solicitudPresupuesto
function validarSolicitud() {
    var nombreSolicitud = document.forms["solicitudPresupuesto"]["nombrePpto"].value;
    var apellidoSolicitud = document.forms["solicitudPresupuesto"]["apellidoPpto"].value;
    var correoSolicitud = document.forms["solicitudPresupuesto"]["correoPpto"].value;
    var textoSolicitud = document.forms["solicitudPresupuesto"]["textoPpto"].value;
  
      if (nombreSolicitud == "" || nombreSolicitud == null) {
      alert("Este campo es requerido: Nombre.");
      return false;
    }
    if (apellidoSolicitud == "" || apellidoSolicitud == null) {
      alert("Este campo es requerido: Apellido.");
      return false;
    }
    if (correoSolicitud == "" || correoSolicitud == null) {
      alert("Este campo es requerido: Correo.");
      return false;
    }
    if (textoSolicitud == "" || textoSolicitud == null) {
      alert("Este campo es requerido: Solicitud.");
      return false;
    }
       
  }