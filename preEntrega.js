// Registro de usuarios.

let usuario = prompt ('Ingrese su nombre de usario: ').trim();

let newPassword = prompt ('Ingrese su contraseña alfanumérica: ');

let ingreseSuMail = prompt ('Ingrese su email: ');

let alfa = false;

let siArroba = false;

let contraOcho = false;


function arroba (){
while (!siArroba){
        if ( ingreseSuMail.match(/[@]/)){
            siArroba=true;
            break;
        }else {
        alert ('Su email debe contener arroba, intente nuevamente.');
        ingreseSuMail = prompt ('Ingrese su email, no olvide el "@": ');
        ingreseSuMail.trim();
            }
        }
}


function number (){
while (!alfa){
        if ( newPassword.match(/[123456789]/)){
            alfa=true;
            break;
        }else {
        alert ('Su password debe tener caracteres alfanumericos.');
        newPassword = prompt ('Ingrese su password: ');
        newPassword.trim();
        }
    }
}

function passwordCaracteres (){
    while (!contraOcho){
        if ( newPassword.length <= 8){
            alert ('La contraseña ingresada debe tener más de ocho caracteres. Carece de seguridad. ');
            newPassword = prompt ('Ingrese su password: ');
            newPassword.trim();
        } else {
            contraOcho = true;
            alert (`Bienvenido usuario ${usuario.toUpperCase()}, su email : ${ingreseSuMail} y password fueron registrados correctamente, gracias!`);
            break;
        }
    }
}

function agradecer (alguien) {
    alert (`Gracias ${alguien.toUpperCase()} por utilizar nuestra base de registros.`);
}


number()

arroba()

passwordCaracteres()

agradecer(usuario)