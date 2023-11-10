//Validamos el formulario
function enviarForm() {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const telefono = document.getElementById("telefono");
    const plan = document.getElementById("planes");
    const visitas = document.getElementById("visitas");

    // Expresión regular para validar el número de teléfono
    const exRegTelefono = /^\d{10}$/;

    // Valida el input Nombre
    if (nombre.value === null || nombre.value === "") {
        alert("Ingrese su nombre");
        document.formulario.nombre.focus();
        return false;
    }

    // Valida el input Apellido
    if (apellido.value === null || apellido.value === "") {
        alert("Ingrese su apellido");
        document.formulario.apellido.focus();
        return false;
    }

    // Valida el input Teléfono
    if (telefono.value === null || telefono.value === "") {
        alert("Ingrese su número de teléfono");
        document.formulario.telefono.focus();
        return false;
    } else if (exRegTelefono.test(telefono.value) == false) {
        alert("Ingrese un número de teléfono válido");
        event.preventDefault();
        document.formulario.telefono.focus();
        return false;
    }

    // Valida el select Planes
    if (plan.selectedIndex == 0) {
        alert("Debe seleccionar un plan");
        event.preventDefault();
        document.formulario.plan.focus();
        return false;
    }

    // Valida el select Visitas
    if (visitas.selectedIndex == 0) {
        alert("Debe seleccionar la cantidad de visitas");
        event.preventDefault();
        document.formulario.visitas.focus();
        return false;
    }

    const confirmacion = confirm(`Sus datos son correctos?\nNombre: ${nombre.value}\nApellido: ${apellido.value}\nTelefono: ${telefono.value}
    \nPlan: ${plan.value}\nVisitas: ${visitas.value}`);

    if(confirmacion){
        alert("Gracias por comunicarte. Te responderemos a la brevedad")
        return true;
    }else{
        return false;
    }
}
