
let user, pass;

function register() {

    user = prompt("Ingresa tu nombre de usuario:");

    pass = prompt("Ingresa tu contraseña:");

    alert("¡Registro exitoso! Usuario: " + user + ", Contraseña: " + pass);
}

function login() {
    let userlogin, passlogin;

    for (let i = 1; i <= 3; i++) {
        userlogin = prompt("Ingresa tu nombre de usuario: ");
        passlogin = prompt("Ingresa tu contraseña: ");

        if (userlogin === user && passlogin === pass) {
            alert("Sesión iniciada");
            return;
        } else {
            alert(`Los datos ingresados son incorrectos. Intento ${i} de 3`);
        }
    }

    alert("Has agotado tus intentos. La sesión no pudo iniciarse.");
}

function data() {
    alert("Tus datos son: " + "Usuario: " + user + " - Contraseña: " + pass)
}

