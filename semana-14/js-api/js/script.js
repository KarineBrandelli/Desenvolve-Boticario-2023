/*
  let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json')
    .then(resposta => resposta.json()) // convertendo a resposta da requisição
    .then(r => {
      if (r.erro) { // se o erro = true, imprime o erro
        throw Error('Esse cep não existe!') // jogando o erro
      } else // se não, imprime a resposta
        console.log(r)
      })
    .catch(erro => console.log(erro)) // pegando o erro
    .finally(mensagem => console.log('Processamento concluído!'));
 */

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

async function buscaEndereco(cep) {
  let mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = '';

  try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    let consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error('CEP Não existente!')
    }
    let cidade = document.getElementById('cidade');
    let logradouro = document.getElementById('endereco');
    let estado = document.getElementById('estado');  

    cidade.value = consultaCEPConvertida.localidade;
    // inserindo 'localidade' (valor que retornou da API) no campo cidade
    logradouro.value = consultaCEPConvertida.logradouro;
    // inserindo 'logradouro' (valor que retornou da API) no campo logradouro
    estado.value = consultaCEPConvertida.uf;
    // inserindo 'uf' (valor que retornou da API) no campo estado

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) { // pega o throw e imprime na tela
    mensagemErro.innerHTML = '<p>CEP inválido! Tente novamente.</p>';
    console.log(erro);
  }
};










