// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendsList = [];

// Funcion para agregar amigos
function addFriend(){
   // Se obtiene el valor del input con el id: 'amigo', y se guarda en la variable addNameFriend
   let nameFriend = document.getElementById('amigo').value;
   cleanInputBox();

   // Se evalua si el nombre ya existe en la lista de amigos
   if(friendsList.includes(nameFriend)){
      // En caso de existir el nombre se lanza alerta
      alert("Atencion! Ya has ingresado este nombre");
   }  else {
      // Caso contrario: se agrega a la lista
      friendsList.push(nameFriend);
   }
   return;
}

// Funcion para limpiar la caja de texto
function cleanInputBox(){
   document.getElementById('amigo').value = '';
}