var Contraseña, Info = {};
if (!localStorage.Info) {

    Contraseña = window.prompt("Crea una contraseña para guardar los datos de forma segura en tu móvil.", "");
    while (Contraseña.length <= 5)
        Contraseña = window.prompt("La contraseña debe tener al menos 6 caracteres, prueba con otra.", "");

    Info = {
        Huchas: {

        }
    }

    Encriptar(Contraseña, JSON.stringify(Info), "Info")

} else {

    Contraseña = window.prompt("Escribe la contraseña para desencriptar los datos.", "");
    Info = JSON.parse(Desencriptar(Contraseña, "Info"));

}