let audios = [
    {caminho: "audios/acertou.mp3", legenda: "Acertou"},
    {caminho: "audios/churrasqueira.mp3", legenda: "Tá pegando fogo"},
    {caminho: "audios/confidencial.mp3", legenda: "Arquivo"},
    {caminho: "audios/errou.mp3", legenda: "Errou"},
    {caminho: "audios/filhadamae.mp3", legenda: "Filha da mãe"},
    {caminho: "audios/meuovo.mp3", legenda: "Meu ovo"},
    {caminho: "audios/oloko.mp3", legenda: "Oloko"},
    {caminho: "audios/porrameu.mp3", legenda: "Porra meu"},
    {caminho: "audios/faustop.mp3", legenda: "Faustop"},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i = 0; i < 9; i++) {
    legendas[i].textContent = `${audios[i].legenda}`;
    botoes[i].setAttribute('data-item', i);
}

let TagAudio = document.querySelector('audio');
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        let som = audios[botao.getAttribute('data-item')];
        TagAudio.setAttribute('src', som.caminho);
        TagAudio.addEventListener('loadeddata', () => {
            TagAudio.play();
        });
    });
});