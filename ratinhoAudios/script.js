let audios = [
    {caminho: "audios/grito.mp3", legenda: "Grito"},
    {caminho: "audios/jesus.mp3", legenda: "Jesus"},
    {caminho: "audios/nao-e-o-pai.mp3", legenda: "Não é o pai"},
    {caminho: "audios/pare.mp3", legenda: "Pare"},
    {caminho: "audios/que-isso-meu-filho.mp3", legenda: "Que isso meu fio"},
    {caminho: "audios/ratinhoo.mp3", legenda: "Ratinho"},
    {caminho: "audios/uepa.mp3", legenda: "Uepa"},
    {caminho: "audios/vixi-ratinho.mp3", legenda: "Vixi"},
    {caminho: "audios/xaropinho.mp3", legenda: "Rapaz"},
];

let botoes = document.querySelectorAll(".botao");
let legendas = document.querySelectorAll("p");

for (let i = 0; i < 9; i++) {
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let TagAudio = document.querySelector('audio');
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        let som = audios[botao.getAttribute('data-item')];
        TagAudio.setAttribute("src", som.caminho);
        TagAudio.addEventListener("loadeddata", () => {
            TagAudio.play();
        });
    });
});