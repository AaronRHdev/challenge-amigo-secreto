// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let firendsList = [];

// Funcion para agregar amigos
function addFriend(){
   // Se obtiene el valor del input con el id: 'amigo', y se guarda en la variable addNameFriend
   let addNameFriend = document.getElementById('amigo').value;
   cleanInputBox();
   console.log(addNameFriend);
   return;
}


// Funcion para limpiar la caja de texto
function cleanInputBox(){
   document.getElementById('amigo').value = '';
}