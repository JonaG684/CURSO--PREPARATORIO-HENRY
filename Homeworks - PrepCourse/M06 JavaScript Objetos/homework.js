/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   const gato = {
      nombre: nombre,
      edad: edad,
      meow: function() {
        return "Meow!";
      }
    };
    return gato;
   }
crearGato("Macho Miguel", 4.5);

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario = {
      nombre: nombre,
      email: email,
      password: password
   }
   return usuario;
}
nuevoUsuario( "Virgilio", "Virgilio-011@gmail.com", "11171269");

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   return objeto;
}
var miObjeto = { nombre: "Jose Feliciano", edad: "65"}
agregarPropiedad(miObjeto, "direccion")

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
      objeto[metodo]();
}
var miObjeto = {
   saludar : function() {
      "Hola!"
   }
}
invocarMetodo(miObjeto, "saludar")


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   var resultado = objetoMisterioso.numeroMisterioso * 5;
   return resultado;
}

var miObjeto = {
   numeroMisterioso: 7
};

var resultadoMultiplicacion = multiplicarNumeroDesconocidoPorCinco(miObjeto);
resultadoMultiplicacion;

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   if (objeto.hasOwnProperty(propiedad)) {
      delete objeto[propiedad];
    }
    return objeto;
}
var miObjeto = {
   nombre: 'Juan',
   edad: 25,
   ciudad: 'Madrid'
 };
 var propiedadEliminar = 'edad';
var objetoModificado = eliminarPropiedad(miObjeto, propiedadEliminar);
objetoModificado;

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.email !== undefined && objetoUsuario.email !== null) {
      return true;
   } else {
      return false;
   }
}
var usuario1 = {
   nombre: "John",
   email: "john@example.com"
};

var usuario2 = {
   nombre: "Jane",
   edad: 25
};
tieneEmail(usuario2);
function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objeto.hasOwnProperty(propiedad);
}
var miObjeto = {
   nombre: "Juan",
   edad: 42
};
tienePropiedad(miObjeto, "nombre");

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objetoUsuario.password === password;
}
var usuario = {
   nombre : "Virgilio",
   email : "GodofWarKratos@gmail.com",
   password: "Zeusismybitch69"
};
verificarPassword(usuario, "Zeusismybitch69");


function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}
var usuario = {
   nombre: "John",
   email: "john@example.com",
   password: "secreto123"
};

var usuarioActualizado = actualizarPassword(usuario, "Elmatatan65");
usuarioActualizado;

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

var usuario = {
   nombre: "Josmar",
   amigos: ["Jonathan"]
};

var nuevoAmigo = agregarAmigo(usuario, "Carlos Zaraza");
nuevoAmigo;

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i].esPremium = true;
   }
   return objetoMuchosUsuarios;
}
var usuarios = [
   { nombre: "John", esPremium: false },
   { nombre: "Jane", esPremium: false },
   { nombre: "Mark", esPremium: false }
];

var usuariosPremium = pasarUsuarioAPremium(usuarios);
usuariosPremium;

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var totalLikes = 0;
   for (var i = 0; i < objetoUsuario.posts.length; i++) {
      totalLikes += objetoUsuario.posts[i].likes;
   }
   return totalLikes;
}
var usuario = {
   nombre: "John",
   posts: [
      { titulo: "Post 1", likes: 10 },
      { titulo: "Post 2", likes: 5 },
      { titulo: "Post 3", likes: 3 }
   ]
};

var likesTotales = sumarLikesDeUsuario(usuario);
likesTotales;

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function() {
      var descuento = this.precio * this.porcentajeDeDescuento;
      var precioFinal = this.precio - descuento;
      return precioFinal;
   };
   return objetoProducto;
}
var producto = {
   precio: 10,
   porcentajeDeDescuento: 0.2
};

producto = agregarMetodoCalculoDescuento(producto);
var precioFinal = producto.calcularPrecioDescuento();
precioFinal;

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
