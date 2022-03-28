let audios = [
    {caminho: "audios/olhaEle.mp3", legenda: "Olha ele"},
    {caminho: "audios/faroSound.mp3", legenda: "Sound"},
    {caminho: "audios/uiRodrigo.mp3", legenda: "Ui!!!"},
    {caminho: "audios/nao.mp3", legenda: "Não"},
    {caminho: "audios/dancaGatinho.mp3", legenda: "Dança Gatinho"},
    {caminho: "audios/tome.mp3", legenda: "Tome"},
    {caminho: "audios/inentendivel.mp3", legenda: "Sound 2"},
]

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll("p");

for (let i = 0; i < 7; i++) {
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let TagAudio = document.querySelector('audio');
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        TagAudio.setAttribute('src', som.caminho);
        TagAudio.addEventListener('loadeddata', () => {
            TagAudio.play();
        });
    });
});