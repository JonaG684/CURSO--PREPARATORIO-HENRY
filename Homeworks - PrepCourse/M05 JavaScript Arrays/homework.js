/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
      if (array.length > 0) {
        return array[0];
      } else {
        return null;
      }  
}
devolverPrimerElemento(["1","2","3","4"])


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length > 0) {
      // Retornar el último elemento del arreglo
      return array[array.length - 1];
    } else {
      // Si el arreglo está vacío, retornar null o un valor adecuado según el contexto
      return null;
    }
}
devolverUltimoElemento(["1","2","3","4"]);


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
obtenerLargoDelArray(["1","2","3","4"]);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var resultado = [];

   for (var i = 0; i < array.length; i++) {
     var elemento = parseInt(array[i]);
     resultado.push(elemento + 1);
   }
 
   return resultado;
    }
incrementarPorUno(["1","2","3","4"]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
agregarItemAlFinalDelArray(["Real Madrid", "Valencia F.C","Atletico de Madrid"], "FC Barcelona");

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
 array.unshift(elemento);
 return array;
}
agregarItemAlComienzoDelArray(["Real Madrid", "Valencia F.C","Atletico de Madrid"], "FC Barcelona");


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");
}
dePalabrasAFrase(["Hola", "A Todos"]);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
arrayContiene(["Hola", "Adios","Chao"], "Cabezon")

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i];
   }
   return suma;
}
agregarNumeros([1, 2, 3, 4, 5]);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i];
   }
   const promedio = suma / resultadosTest.length;
   return promedio;
}
promedioResultadosTest([80, 90, 70, 85, 95]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
      // El parámetro "arrayOfNums" es un arreglo de números.
      // Retornar el número más grande.
      // Tu código:
      let max = arrayOfNums[0];
      for (let i = 1; i < arrayOfNums.length; i++) {
         if (arrayOfNums[i] > max) {
            max = arrayOfNums[i];
         }
      }
      return max;
}
numeroMasGrande([1, 5, 76, 12, 100]);


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
   } else if (arguments.length === 1) {
      return arguments[0];
   } else {
      let producto = 1;
      for (let i = 0; i < arguments.length; i++) {
         producto *= arguments[i];
      }
      return producto;
   }
}
multiplicarArgumentos(2, 3, 4);
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         contador++;
      }
   }
   return contador;
}
cuentoElementos([10, 20, 30, 15, 25]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   } else {
      return "Es dia laboral";
   }
}
diaDeLaSemana(1);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   const numString = num.toString();
   return numString.charAt(0) === "9";
}
empiezaConNueve(999);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length === 0) {
      return true;
    }
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[0]) {
        return false;
      }
    }
  
    return true;
}
todosIguales(["1", "1", "1"],)

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesPedidos = ["Enero", "Marzo", "Noviembre"];
  const mesesEncontrados = [];

  for (let i = 0; i < array.length; i++) {
    if (mesesPedidos.includes(array[i])) {
      mesesEncontrados.push(array[i]);
    }
  }

  if (mesesEncontrados.length === mesesPedidos.length) {
    return mesesEncontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}
mesesDelAño(["Agosto","Septiembre","Diciembre"]);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const tabla = [];

   for (let i = 0; i <= 10; i++) {
     tabla.push(6 * i);
   }
 
   return tabla;
 }
tablaDelSeis(6);

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const mayoresACien = [];

   for (let i = 0; i < array.length; i++) {
     if (array[i] > 100) {
       mayoresACien.push(array[i]);
     }
   }
 
   return mayoresACien;
}
mayorACien([100, 200, 300, 500, 400]);

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const valores = [];

   for (let i = 0; i < 10; i++) {
     num += 2;
     valores.push(num);
 
     if (num === i) {
       break;
     }
   }
 
   if (valores.length < 10) {
     return "Se interrumpió la ejecución";
   } else {
     return valores;
   }
  }
breakStatement(125);

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const valores = [];

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }

    num += 2;
    valores.push(num);
  }

  return valores;
}
continueStatement(5);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
