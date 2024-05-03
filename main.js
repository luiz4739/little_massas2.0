const dataAtual = new Date();
let diasQueFaltam = calculaDias();

while(diasQueFaltam < 0){
    alert("Eu sei que você digitou errado propositalmente para testar as funcionalidades.");
    diasQueFaltam = calculaDias();
}
document.querySelector("#dias_restantes").textContent = diasQueFaltam+" dias";

function calculaDias(){
    let dataObjetivo = prompt("Coloca uma data ae (Escreve primeiro ANO-MÊS-DIA, ex: 2024-05-30");
    dataObjetivo = new Date(dataObjetivo+"T23:59:59");
    return Math.floor((dataObjetivo - dataAtual) / 86400000);
}
