const myJSON = [6, 10, 3, 8, 5];

// ----- Conversões -----
const taxaDeConversao = 4.86;
const dolar0 = myJSON[0];
const real0 = dolar0 * taxaDeConversao;

const dolar1 = myJSON[1];
const real1 = dolar1 * taxaDeConversao;

const dolar2 = myJSON[2];
const real2 = dolar2 * taxaDeConversao;

const dolar3 = myJSON[3];
const real3 = dolar3 * taxaDeConversao;

const dolar4 = myJSON[4];
const real4 = dolar4 * taxaDeConversao;
console.log(`${dolar0} dolares são aproximadamente ${real0.toFixed(2)} reais.`);


document.getElementById("dolar0").innerHTML= dolar0
document.getElementById("real0").innerHTML= real0.toFixed(2)

document.getElementById("dolar1").innerHTML= dolar1
document.getElementById("real1").innerHTML= real1.toFixed(2)

document.getElementById("dolar2").innerHTML= dolar2
document.getElementById("real2").innerHTML= real2.toFixed(2)

document.getElementById("dolar3").innerHTML= dolar3
document.getElementById("real3").innerHTML= real3.toFixed(2)

document.getElementById("dolar4").innerHTML= dolar4
document.getElementById("real4").innerHTML= real4.toFixed(2)