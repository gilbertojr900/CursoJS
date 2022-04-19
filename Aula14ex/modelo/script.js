function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value == 0){ //controle quando não se digita
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        //Limpar area para proxima tabuada
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //qual item foi selecionado(php)
            tab.appendChild(item)
            c++ 
        }
    }
    
}
function limpar(){
    seltab.innerHTML = ''
}