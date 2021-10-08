function validar_form(){
    let user = document.formulario.usuario;
    let email = document.formulario.email;
    let password = document.formulario.pass;

    /*let user_len = user.value.length;
    if(user_len == 0 || user_len >8){
        alert("El usuario debe contener max 8 caracteres");
    }*/

    let formatoCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!formatoCorreo.test(email.value)){
        alert("Ingresar correo válido");
    }

    if (formatoCorreo.test(user.value)){
        alert("No puedes agragarle datos alfanumericos a tu nombre");
    }

    let pass_len = password.value.length;
    if (pass_len == 0 || pass_len < 8){
        alert("Contraseña debe contener mínimo 8 caracteres");

    }
    



}