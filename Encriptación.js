let Caracteres = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "#",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "+",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "$", "%", "?", "¿", "=", "(", ")", "&", "€", "¡", "<", ">", ":", "-", "_", "*", "/",
    "|", ":", ";", ",", ".", "ç", "\"", "'", "]", "[", "{", "}"
];

const Random = (num = 0, max = 0) => {

    let provNumber = num;

    provNumber += 5;
    provNumber *= 13;
    provNumber += num;
    provNumber = provNumber % (max + 1);
    provNumber *= num * 24;

    return provNumber % (max + 1);

}

const Encriptar = (key, message, chanel) => {

    let numberKeys = key.split("").map(el => Caracteres.indexOf(el));
    let messageIdxs = message.split("").map(el => Caracteres.indexOf(el));
    let encriptedMessage = [];

    for (let i = 0; i < messageIdxs.length; i++)
        encriptedMessage
            .push(
                (Random(numberKeys[i % numberKeys.length], Caracteres.length - 1) + messageIdxs[i]) % Caracteres.length
            );

    encriptedMessage = encriptedMessage.map(el => Caracteres[el]).join("");
    localStorage[chanel] = encriptedMessage;

    return encriptedMessage;

}

const Desencriptar = (key, chanel) => {

    let numberKeys = key.split("").map(el => Caracteres.indexOf(el));
    let messageIdxs = localStorage[chanel].split("").map(el => Caracteres.indexOf(el));
    let desencriptedMessage = [];

    for (let i = 0; i < messageIdxs.length; i++)
        desencriptedMessage
            .push(
                (messageIdxs[i] - Random(numberKeys[i % numberKeys.length], Caracteres.length - 1) + Caracteres.length) % Caracteres.length
            );

    desencriptedMessage = desencriptedMessage.map(el => Caracteres[el]).join("");

    return desencriptedMessage;

}