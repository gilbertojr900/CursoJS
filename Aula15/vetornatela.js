//criar um vetor

let valores = [5, 4, 6, 1, 2, 4, 8]

console.log (valores)
// num.indexOF(colocar valor)
// num.push(colocar item) vai adicionar item no final do array
// num.sort() vai organizar por ordem crescente


/*
console.log (valores[0])
console.log (valores[1])
console.log (valores[2])
console.log (valores[3])
console.log (valores[4])
console.log (valores[5])

*/
//versão antiga
for(let pos=0; pos < valores.length;pos++) {
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//nova versão - array

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
