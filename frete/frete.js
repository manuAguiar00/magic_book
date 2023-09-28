function consultarCEP() {
    const cepInput = document.getElementById('cepInput');
    const resultado = document.getElementById('resultado');

    // limpa 
    resultado.innerHTML = '';

    const cep = cepInput.value.replace(/\D/g, '');

    if (cep.length !== 8) { //verifica se o que o usuário escreveu tem 8 numeros
        resultado.innerHTML = '<p>CEP não encontrado. Digite 8 dígitos.</p>';
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())//transforma em json
        .then(data => {
            if (data.erro) {
                resultado.innerHTML = '<p>CEP não encontrado, tente novamente.</p>';
            } else {
                resultado.innerHTML = `
                    <p>CEP: ${data.cep}</p>
                    <p>Rua: ${data.logradouro}</p>
                    <p>Bairro: ${data.bairro}</p>
                    <p>Cidade: ${data.localidade}</p>
                    <p>Estado: ${data.uf}</p>
                `;
            }
        })
        

        //se der errado
        .catch(error => {
            resultado.innerHTML = '<p>Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.</p>';
            console.error(error);
        });
}

//calculo do frete por regiao
function calcularPreco() {
  const frete = document.getElementById('frete').value;


  let precoFrete;
  switch (frete) {
      case 'Norte':
          precoFrete = 18.00;
          break;
      case 'Nordeste':
          precoFrete = 15.00;
          break;
      case 'Centro-Oeste':
          precoFrete = 10.00;
          break;
      case 'Sudeste':
            precoFrete = 5.00;
            break;
      case 'Sul':
          precoFrete = 15.00;
          break;
      case 'Mogi':
          precoFrete = 0;
          break;
      default:
          precoFrete = 0.00;
          break;
  }

  document.getElementById('resultado1').innerHTML = `O preço estimado do frete é de R$ ${precoFrete.toFixed(2)}`;
}