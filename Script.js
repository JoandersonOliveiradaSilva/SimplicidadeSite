const formulario = document.getElementById('entreEmContato');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoMensagem = document.getElementById('mensagem');
const mensagemAviso = document.getElementById('mensagemAviso');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const mensagem = campoMensagem.value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        mensagemAviso.textContent = 'Por favor, preencha todos os campos.';
        mensagemAviso.style.color = 'red';
        return;
    }

    mensagemAviso.textContent = `Obrigado, ${nome}! A sua mensagem foi enviada com sucesso!`;
    mensagemAviso.style.color = 'green';

    formulario.reset();
});