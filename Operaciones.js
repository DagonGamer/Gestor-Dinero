const añadirHucha = hucha => {

    Info.Huchas[hucha] = {
        tipos: [],
        transacciones: []
    }

    Encriptar(Contraseña, JSON.stringify(Info), "Info");

}

const añadirTipo = (hucha, tipo) => {

    Info.Huchas[hucha].tipos.push(tipo);

    Encriptar(Contraseña, JSON.stringify(Info), "Info");

}

const añadirTransaccion = (hucha, tipo, asunto, precio, fecha) => {

    Info.Huchas[hucha].transacciones.push({
        tipo,
        precio,
        fecha,
        asunto
    });

    Encriptar(Contraseña, JSON.stringify(Info), "Info");

}