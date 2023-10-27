function sum(...numeros){
    let suma = 0;
    for (let i=0;i<numeros.length;i++){
        suma = suma + numeros[i];
    }
    return suma
}

function addOnlyNums(...numeros){
    let suma = 0;
    for (let i=0;i<numeros.length;i++){
        if (isNaN(numeros[i])){

        }else {
            suma = suma + numeros[i];
        }
    }
    return suma
}
function countTheArgs(...numeros){
    let cont = 0;
    for (let i=0;i<numeros.length;i++){
        cont++;
    }
    return cont;
}
function combineTwoArrays(array1,array2){
    let arrayjunt = [array1,...array2];
    return arrayjunt;

}
function sumEveryOther(...numeros){
    let suma = 0;
    let cont = 1;
    for (let i=0;i<numeros.length;i++){
        if (cont%2===0){
            
        } else{
            suma = suma + numeros[i];
        }
        cont++;
    }
    return suma;
}
function onlyUniques(...array){
    let array2 = [];
    array2[0]=array[0];
    
    for (let i=0;i<array.length;i++){
        let cont=0;
        for (let j=0;j<array2.length;j++){
            if (array[i]==array2[j]){
                cont++
            }
        }
        if (cont==0){
            array2.push(array[i])
        }
    }
    return array2;
}
function SumAndSquare(...numeros){
    let suma = 0;
    for (let i=0;i<numeros.length;i++){
        suma = suma + numeros[i]*numeros[i];
    }
    return suma
}
function combineAllArrays(...arrays){
    const arrayg = [];
    for(let i = 0; i<arguments.length; i++){
        arrayg.push(arguments[i]);
    }
    return arrayg;
}