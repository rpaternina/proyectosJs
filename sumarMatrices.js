let lista1 = [1,2,3,4,5];
let lista2 = [6,7,8,9,6];


if(lista1.length === lista2.length){
    console.log('Los elementos de la lista 1: ' + lista1+ ' Se sumaran con los elementos de la lista 2: '+ lista2);
    let resultado = lista1.map( (item, ix) => item + (lista2[ix]) )
    console.log(resultado);
    
}else{
    console.log('Las listas deben tener las mismas longitudes ambas');
}