let listaAmigos = []

// cria uma função para adicionar um novo nome na lista.
function adicionarAmigo() {
    // acessa o conteúdo digitado pela usuário.
    let nome = document.getElementById('amigo').value;
    if (nome.trim() === '') {
        // SE o campo estiver vazio, exibe um alerta.
        alert('Por favor, digite um nome válido.');
        return;
    }
     // Adiciona o nome do amigo para o final da lista.
    listaAmigos.push(nome);
    // Limpa o campo de nomes após clicar em adicionar.
    document.getElementById('amigo').value = '';
     atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    // Limpa a lista atual para evitar duplicação.
    lista.innerHTML = '';
    // inicia um loop para percorrer a lista de amigos.
    for (let amigo of listaAmigos) {
        // cria um novo item de lista para cada amigo.
        let item = document.createElement('li');
        item.textContent = amigo;
        // adiciona o item à lista.
        lista.appendChild(item);
    }
     
}
// cria a função para sortear um nome aleatório da lista.
function sortearAmigo() {
    if (listaAmigos.length < 3) {
        alert('Adicione pelo menos três amigos para sortear.');
        return;
    }
    // gera um número aleatório entre 0 e o tamanho da lista.
    const indice = Math.floor(Math.random() * listaAmigos.length);
    // pega o nome do amigo sorteado.
    const sorteado = listaAmigos[indice];
    // exibe o nome ao clicar em sortear.
    document.getElementById('resultado').textContent = `Seu amigo secreto é: ${sorteado}`;
}