const mensagensUsuario = []

const formularioMensagem = document.querySelector('form')
const listaMensagens = document.querySelector('ul')

function renderizarMensagens() {
  let itensMensagem = ''
  for (const mensagem of mensagensUsuario) {
    itensMensagem = `
      ${itensMensagem}
      <li class="message-item">
        <div class="message-image">
          <img src="${mensagem.image}" alt="${mensagem.text}">
        </div>
        <p>${mensagem.text}</p>
      </li>
    `
  }

  listaMensagens.innerHTML = itensMensagem
}

function enviarMensagem(event) {
  event.preventDefault()
  const campoMensagem = event.target.querySelector('textarea')
  const campoImagem = event.target.querySelector('input')
  const mensagemUsuario = campoMensagem.value
  const urlMensagem = campoImagem.value

  if (
    !mensagemUsuario ||
    !urlMensagem ||
    mensagemUsuario.trim().length === 0 ||
    urlMensagem.trim().length === 0
  ) {
    alert('Insira uma imagem e mensagem válida.')
    return
  }

  mensagensUsuario.push({
    text: mensagemUsuario,
    image: urlMensagem,
  })

  campoMensagem.value = ''
  campoImagem.value = ''

  renderizarMensagens()
}

formularioMensagem.addEventListener('submit', enviarMensagem)
