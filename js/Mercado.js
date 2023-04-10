Compras = new Array;
Compras = [''];

// Primeira ação
function minhaFuncaoPera(){
    const el = document.querySelector('#pera');
    el.style.cssText =
    'height: 80px;' +
    'width: 80px;';
}
function minhaFuncaoMaca(){
    const el = document.querySelector('#maça');
    el.style.cssText =
    'height: 80px;' +
    'width: 80px;';
}
function minhaFuncaoBanana(){
    const el = document.querySelector('#banana');
    el.style.cssText =
    'height: 80px;' +
    'width: 80px;';
}
function botao(){
    const el = document.querySelector('#botao');
    el.style.cssText =
    'height: 32px;' +
    'width: 32px;';
}
// FIM

// Segunda ação
function PeraTWOFuncao(){
    const el = document.querySelector('#pera');
    el.style.cssText = 
    'height: 70px;' +
    'width: 70px;';
}
function MacaTWOFuncao(){
    const el = document.querySelector('#maça');
    el.style.cssText = 
    'height: 70px;' +
    'width: 70px;';
}
function BananaTWOFuncao(){
    const el = document.querySelector('#banana');
    el.style.cssText = 
    'height: 70px;' +
    'width: 70px;';
}
function botaoOne(){
    const el = document.querySelector('#botao');
    el.style.cssText =
    'height: 30px;' +
    'width: 30px;';
}
// FIM

// Terceira ação
function PeraTREEFuncao(){
    Compras.push('<br>Pera');
    document.getElementById("texto").innerHTML = Compras.join('');
}
function MacaTREEFuncao(){
    Compras.push('<br>Maça');
    document.getElementById("texto").innerHTML = Compras.join('');
}
function BananaTREEFuncao(){
    Compras.push('<br>Banana');
    document.getElementById("texto").innerHTML = Compras.join('');
}
// FIM

function Remover(){
    Compras.shift();
    document.getElementById("texto").innerHTML = Compras.join('');
}