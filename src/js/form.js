document.addEventListener("DOMContentLoaded", function () {
    // Oculta las alertas al cargar la página
    alertValidacionesNombre.style.display = "none";
    alertValidacionesTelefono.style.display = "none";
    alertValidacionesEmail.style.display = "none";
    alertValidacionesMensaje.style.display = "none";

    // Variables para rastrear la validez de los campos
    let nombreVal = false;
    let telefonoVal = false;
    let emailVal = false;
    let mensajeVal = false;

    let errores = 0;

    /* ****************************** Botón clear ****************************** */
    btnClear.addEventListener("click", function (event) {
        event.preventDefault();
        // Limpia alertas
        alertValidacionesNombre.style.display = "none";
        alertValidacionesTelefono.style.display = "none";
        alertValidacionesEmail.style.display = "none";
        alertValidacionesMensaje.style.display = "none";
        // Elimina bordes
        nombre.style.border = "";
        telefono.style.border = "";
        email.style.border = "";
        mensaje.style.border = "";
        // Limpia campos
        nombre.value = "";
        telefono.value = "";
        email.value = "";
        mensaje.value = "";

    });

    /* ****************************** Botón enviar ****************************** */
    btnEnviar.addEventListener("click", function (event) {
        event.preventDefault();

        // Campos limpios
        alertValidacionesNombre.style.display = "none";
        alertValidacionesTelefono.style.display = "none";
        alertValidacionesEmail.style.display = "none";
        alertValidacionesMensaje.style.display = "none";
        // Campos sin bordes
        nombre.style.border = "";
        telefono.style.border = "";
        email.style.border = "";
        mensaje.style.border = "";
        // No acepta espacios
        nombre.value = nombre.value.trim();
        telefono.value = telefono.value.trim();
        email.value = email.value.trim();
        mensaje.value = mensaje.value.trim();

        // Validación de NOMBRE
        if (!nombre.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) == true) {
            alertValidacionesNombre.style.display = "block";
            nombre.style.border = "solid 1px #cf2379";
            nombreVal = false;
            errores++;
        } else {
            nombreVal = true;
        }

        // Validación de TELÉFONO
        if (!telefono.value.match(/^(?!([0-9])\1{9})\d{10}$/)) {
            alertValidacionesTelefono.style.display = "block";
            telefono.style.border = "solid 1px #cf2379";
            telefonoVal = false;
            errores++;
        } else {
            telefonoVal = true;
        }

        // Validación de EMAIL
        if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/)) {
            alertValidacionesEmail.style.display = "block";
            email.style.border = "solid 1px #cf2379";
            emailVal = false;
            errores++;
        } else {
            emailVal = true;
        }

        // Validación de MENSAJE
        if (mensaje.value.trim().length < 20) {
            alertValidacionesMensaje.style.display = "block";
            mensaje.style.border = "solid 1px #cf2379";
            mensajeVal = false;
            errores++;
        } else {
            mensajeVal = true;
        }

        // ENVÍA
        if (nombreVal == true && emailVal == true && mensajeVal == true && telefonoVal == true) {
            event.target.form.submit();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu mensaje se envió correctamente',
                showConfirmButton: false,
                timer: 1500
            })
            nombre.value = "";
            telefono.value = "";
            email.value = "";
            mensaje.value = "";
        } else {

        }
    });
});
