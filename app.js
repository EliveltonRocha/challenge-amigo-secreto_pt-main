let listaAmigos = []

// Função para adicionar um novo amigo.
function adicionarAmigo() {
    // acessa o conteúdo digitado pela usuário.
    let nome = document.getElementById('amigo').value;
    
 // Adiciona o nome do amigo para o final da lista.
    listaAmigos.push(nome);

    // Atualiza o elemento com id 'listaAmigos' para mostrar os nomes e separa com um hifem
    document.getElementById('listaAmigos').textContent = listaAmigos.join(' - ');
    
    // Limpa o campo de nomes após clicar em adicionar.
    document.getElementById('amigo').value = '';
}
