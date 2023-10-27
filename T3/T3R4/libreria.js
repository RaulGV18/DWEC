/**
* @name filterNumbersGreaterThan
* @description Filtra los números de un array que sean mayor a cierto número
x dejando solo los que sean menores a este
*
* @param {numeros[]} numbers - Array de números a filtrar
* @param {num} filter - Número a partir del cuál filtrar los demás número
s
* @returns {numerosfiltrado[]} - Array de números filtrados menores a {filter}
*
* @example
* filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
*/

function filterNumbersGreaterThan(numeros,num){
    let numerosfiltrado=[];
    
    for (let i=0;i<numeros.length;i++){
        if (numeros[i]<=num){
            numerosfiltrado.push(numeros[i])
        }
    }
    
    return numerosfiltrado;
}

/**
* @name toHackerSpeak
* @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que
transformar las "a" en 4, las "e" en 3, las "i"
* en 1, las "o" en 0 y las "s" en 5
*
* @param {string} text
* @returns {String} - El texto convertido a "Hacker Speak"
*
* @example
* toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
*/

function toHackerSpeak(string){
    let textoconvert = string;
    let letras = ["a","e","i","o","s"];
    let hacker = ["4","3","1","0","5"];

    for (let i=0;i<letras.length;i++){
        textoconvert= textoconvert.replaceAll(letras[i],hacker[i]);
        textoconvert= textoconvert.replaceAll(letras[i].toUpperCase(),hacker[i]);
    }
    
    return textoconvert;
}
/**
* @name getFileExtension
* @description Obtiene la extensión de un archivo
*
* @param {string} file - El nombre del archivo a obtener la extensión
* @returns {String} - La extensión del archivo
*
* @example
* getFileExtension("imagen.jpg") // returns "jpg"
*/

function getFileExtension(string){
    let archivo=string.split(".");
    if (!archivo[archivo.length-1]){
        return"";
    } else {
        return archivo[archivo.length-1];
    }
}

/**
* @name flatArray
* @description Dado un array 2D, devuelve un array 1D que contiene todos los
ítems
*
* @param {[][]} arr - Array 2D a "aplanar"
* @returns {[]} - El array "aplanado"
*
* @example
* flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
*/

function flatArray(arr){
    let array = []
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr[i].length;j++){
            array.push(arr[i][j])
        }
    }
    return array;
}


/**
* @name removeDuplicates
* @description Remueve duplicados de un array
*
* @param {[]} arr - Array con duplicados a remover
* @returns {[]} - El array resultante sin duplicados
*
* @example
* removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
*/

function removeDuplicates(arr){
    let arraysindup = [];
    arraysindup = arr.filter((element,index)=>{
        return arr.indexOf(element) === index
    }) 
    return arraysindup
}

/**
* @name countLetter
* @description Devuelve la cantidad de veces que una letra aparece en un str
ing
*
* @param {string} letter - Letra a contar
* @param {string} text - Texto sobre el que realizar la cuenta de {letter}
* @returns {Number} - Número de veces que aparece {letter} en {text}
*
* @example
* countLetter("a", "javascript") // returns 2
*/

function countLetter(letra,texto){
    let contlet=0;
    for (let i=0;i<texto.length;i++){
        if (texto.charAt(i).toLowerCase()==letra){
            contlet++;
        }
    }
    return contlet;
}


/**
* @name removeWords
* @description Dado un string y un array de palabras a remover, devuelve el
string sin las palabras removidas
*
* @param {string} str - Texto a recortar
* @param {string[]} words - Palabras a remover
* @returns {string} - Texto resultante con las palabras removidas
*
* @example
* removeWords("This is a really bad test", ["really", "bad"]) // returns
"This is a test"
*/
function removeWords(str,words) {
    let cadenacortada = str;
    for (let i=0;i<words.length;i++){
        let regex = new RegExp('\\b' + words[i] + '\\b', 'gi');
        cadenacortada = cadenacortada.replace(regex, '');
    }
    return cadenacortada;
}
