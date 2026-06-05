const questions = [
{
question: "No nosso primeiro date, quantos minutos você se atrasou?",
answers: ["10 minutos", "30 minutos", "1 hora", "Você nem se atrasou"],
correct: "30 minutos"
},
{
question: "Qual foi a primeira flor que você me deu?",
answers: ["Uma rosa vermelha", "Um girassol", "Uma tulipa", "Uma rosa branca"],
correct: "Uma rosa vermelha"
},
{
question: "Qual apelido eu mais uso com você?",
answers: ["Meu amor", "Mb", "Amore", "Querido"],
correct: "Mb"
},
{
question: "Com quantos meses de namoro eu comecei a ir pra sua casa?",
answers: ["3 meses", "4 meses", "5 meses", "6 meses"],
correct: "5 meses"
},
{
question: "Qual foi o mês da nossa primeira call?",
answers: ["Outubro", "Novembro", "Dezembro", "Janeiro"],
correct: "Dezembro"
},
{
question: "Quem é melhor: Meliodas ou Escanor?",
answers: ["Escanor", "Meliodas", "Os dois", "Nenhum"],
correct: "Meliodas"
},
{
question: "Qual foi o primeiro filme que eu te obriguei a assistir?",
answers: ["Carros", "Descendentes", "Arcane", "A Dama e o Vagabundo"],
correct: "Descendentes"
},
{
question: "Quem ama mais?",
answers: ["Você", "Eu obviamente 😼", "Empate", "Depende do dia"],
correct: "Eu obviamente 😼"
},
{
question: "Qual é a nossa mania mais fofa e também mais estranha ao mesmo tempo?",
answers: [
"Ficar fazendo carinho",
"Ficar passando nossas línguas uma na outra",
"Ficar mandando áudio",
"Ficar competindo quem ama mais"
],
correct: "Ficar passando nossas línguas uma na outra"
},
{
question: "Qual é o desenho e música que eu falo que representa a gente mais?",
answers: ["Carros", "A Dama e o Vagabundo", "Descendentes", "Arcane"],
correct: "A Dama e o Vagabundo"
}
];

const wrongMessages = [
"Meu amor, eu não acredito que você errou essa... sua memória tá tão ruim assim? 🤨❤️",
"Ai meu Deus, mb... era pra você saber essa 😭❤️",
"ERROU! Eu vou fingir que você clicou no botão errado 😌",
"Talvez eu precise começar a te fazer revisões semanais sobre o nosso relacionamento 😭"
];

let currentQuestion = 0;
let xp = 0;
let answered = false;

function showMission() {
const music = document.getElementById("bgMusic");

if (music && music.paused) {

music.volume = 0.35;
music.play();
}

document.getElementById("homeScreen").classList.remove("active");
document.getElementById("missionScreen").classList.add("active");
}

function startQuiz() {
document.getElementById("missionScreen").classList.remove("active");
document.getElementById("quizScreen").classList.add("active");
loadQuestion();
}

function loadQuestion() {
answered = false;

const q = questions[currentQuestion];

document.getElementById("questionText").innerText = q.question;
document.getElementById("quizMessage").innerText = "";

const answerButtons = document.getElementById("answerButtons");
answerButtons.innerHTML = "";

q.answers.forEach(function(answer) {
const button = document.createElement("button");
button.innerText = answer;
button.classList.add("answer-btn");

button.onclick = function() {
checkAnswer(answer);
};

answerButtons.appendChild(button);
});
}

function checkAnswer(answer) {
if (answered) {

return;
}

answered = true;

const buttons = document.querySelectorAll(".answer-btn");
buttons.forEach(function(button) {
button.disabled = true;
});

if (answer === questions[currentQuestion].correct) {
xp = xp + 100;
document.getElementById("quizMessage").innerText = "Boa! +100 XP de namorado ❤️";
} else {
const randomMessage = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
document.getElementById("quizMessage").innerText = randomMessage;
}

document.getElementById("scoreText").innerText = "XP: " + xp + " ❤️";

setTimeout(function() {
currentQuestion = currentQuestion + 1;

if (currentQuestion < questions.length) {
loadQuestion();
} else {
finishQuiz();
}
}, 1800);
}

function finishQuiz() {
document.querySelector(".quiz-box").innerHTML = `
<h2>🏆 KACHOW! Conquista desbloqueada</h2>
<h3>Até que você se lembra das coisas ❤️</h3>
<p>Parece que você conhece a gente bem 🤣❤️</p>
<p>XP final: ${xp} ❤️</p>
<button onclick="showMemories()">📸 Desbloquear Memórias</button>
`;
}

function showMemories() {
document.getElementById("quizScreen").classList.remove("active");
document.getElementById("memoriesScreen").classList.add("active");
loadMemory();
}

const memories = [
{
image: "foto1.jpn.png",
text: "Essa foto a gente tirou antes mesmo da gente se assumir publicamente. Nesse dia a gente passou um tempão ouvindo Yago Oproprio, deitados juntos, só se olhando e se beijando ❤️"
},
{
image: "foto2.jpn.png",
text: "Nossa primeira foto juntos. Nesse dia a gente marcou de sair pro primeiro date sem nem saber pra onde ir kkkkk e acabou indo parar numa arcade 🎮❤️"
},
{
image: "foto3.jpn.png",
text: "O dia em que eu convenci você a fazer skincare pela primeira vez. Diz você que nunca sofreu tanto na vida kkkkk"
},
{
image: "foto4.jpn.png",
text: "Nosso primeiro Dia dos Namorados juntos. A gente decidiu tirar um monte de fotos, e essa é uma das mais bonitas porque você tá com um sorrisinho muito fofo ❤️"
},
{
image: "foto5.jpn.png",
text: "Essa foto é muito aleatória kkkkk a gente tava em call e você percebeu que seu cabelo tava parecendo dois chifrinhos. A gente riu muito disso."
},
{
image: "foto6.jpn.png",
text: "Esse dia a gente saiu e tava tirando foto numa ponte. O vento tava forte mais que tudo, mas o jeito que a gente tá se beijando ficou muito apaixonante ❤️"
},
{
image: "foto7.jpn.png",
text: "Mesmo sendo uma foto bem zoada, a gente tá muito mídia kkkkk nesse dia a gente tava experimentando efeitos do Snapchat."
},
{
image: "foto8.jpn.png",
text: "Esse dia foi loucura. Você foi doido o suficiente pra alisar meu cabelo mesmo sem nunca ter feito isso antes, e eu fui louca o suficiente pra confiar kkkkk. Mesmo sendo uma foto bem zoada, é uma das minhas favoritas ❤️"
},
{
image: "foto9.jpn.png",
text: "A gente tava indo pra uma festa e você decidiu começar a tirar foto. Eu fui fazer graça com você e você foi morder meu braço kkkkk"
},
{
image: "foto10.jpn.png",
text: "Eu tava voltando da sua casa e tava passando mal. Aí, pra me perturbar, você decidiu começar a tirar foto, mas eu não queria porque tava falando que tava feia. Mesmo assim, eu gosto dessa foto porque foi um dia bem marcante ❤️"
},
{
image: "foto11.jpn.png",
text: "Esse dia a gente foi pro centro e depois ficou no parque. A gente conversou muito e teve um tempo só nosso. Foi maravilhoso ❤️"
},
{
image: "foto12.jpn.png",
text: "Esse dia você foi me buscar no meu college. A gente ficou andando e depois foi de ônibus pra perto do seu serviço. A gente ficou lá fazendo vários nada, mas foi muito bom. E essa foto é muito fofa ❤️"
},
{
image: "foto13.jpn.png",
text: "Esse dia eu inventei de te encher de marca de batom. Foi muito divertido e você ficou um fofo assim 💋❤️"
},
{
image: "foto14.jpn.png",
text: "Esse dia eu entreguei seus presentes de Natal. Eu comprei macacão combinando pra gente, e essa foto ficou extremamente fofa e linda ❤️"
},
{
image: "foto15.jpn.png",
text: "Nessa foto você tava dormindo no meu peito. Eu tenho um monte de foto assim porque você ama dormir desse jeito, e eu amo tirar foto kkkkk. A gente tava muito fofo aí ❤️"
}
];

let currentMemory = 0;

function loadMemory() {
const memory = memories[currentMemory];

document.getElementById("memoryContent").innerHTML = `
<p class="memory-count">Memória ${currentMemory + 1} de ${memories.length}</p>
<img src="${memory.image}" class="memory-photo">
<p class="memory-text">${memory.text}</p>
`;
}

function nextMemory() {
currentMemory++;

if (currentMemory < memories.length) {
loadMemory();
} 
else {
document.getElementById("memoryContent").innerHTML = `
<h2>🏁 Última volta...</h2>

<p class="memory-text">
Você desbloqueou todas as nossas memórias, meu amor ❤️
</p>

<p class="memory-text">
Mas a corrida ainda não acabou... ainda existem algumas cartinhas secretas.

</p>

<button onclick="showLetters()">
💌 Abrir Cartas Secretas
</button>
`;
}
}

const letters = [
"Oi meu amor, sabia que eu sempre tô morrendo de saudades de você? Eu sempre tô com você na cabeça, parece que tudo que eu vejo me lembra você e a gente. Você é a pessoinha que eu mais amo, tá bom? Nunca se esqueça disso, meu amor ❤️",

"Oh meu deuso, meu bb não tá bem gente 🥺 num podi isso galera. Eu te amo muitão, tá? Não importa o que aconteça, meu amor, eu sempre vou estar aqui pra você e sempre vou te amar ❤️",

"Sabia que eu te amo bem mais do que você me ama? Kkkkk. Eu te amo muito, meu amor, nunca na sua vida duvide disso. Eu te amo mais do que Monster, mais do que a cor azul, mais do que Arcane, mais do que qualquer pessoa… e por aí vai kkkkk. Nunca duvide do meu amor por você, tá bom? A cada dia que passa, eu me apaixono mais por você ❤️"
];

function showLetters() {
document.getElementById("memoriesScreen").classList.remove("active");
document.getElementById("lettersScreen").classList.add("active");
}

function openLetter(index) {
document.getElementById("letterContent").innerHTML = `
<div class="letter-card">
<p>${letters[index]}</p>
</div>
`;
}

function showFinalLetter() {
document.getElementById("lettersScreen").classList.remove("active");
document.getElementById("finalScreen").classList.add("active");

document.getElementById("finalLetter").innerHTML = `
<p>Meu amor,</p>

<p>Hoje você completa 20 anos, e eu queria fazer algo diferente pra você. Não queria que fosse só um presente qualquer, queria que fosse algo nosso, com nossas fotos, nossas piadas, nossas memórias e um pouquinho de tudo que a gente é.</p>

<p>Eu admiro muito o seu jeito, o jeito que você me trata, o jeito que você faz graça de tudo e consegue deixar os momentos mais leves. Eu amo seu jeito descontraído, seu gosto musical e até o fato de que, se não fosse você, eu não teria conhecido um monte de artista que eu amo hoje.</p>

<p>Você me ajudou a me encontrar de um jeito que talvez nem perceba. Depois que você apareceu na minha vida, muita coisa mudou. Eu consegui enxergar melhor quem eu sou, melhorar meu jeito, meu estilo, meu gosto musical e até melhorar como pessoa.</p>

<p>Com você eu descobri o que é amor de verdade. Eu encontrei o amor da minha vida aos 15 anos, e sinceramente, eu tirei a sorte grande com isso.</p>

<p>Eu amo nossas memórias. Amo lembrar da gente no começo, lá em casa, ouvindo Yago Oproprio. Amo lembrar da gente se assumindo pra todo mundo. Amo lembrar da gente na sua casa só conversando e ouvindo Costa Gold. Amo cada momento em que eu tô deitada no seu peito enquanto você faz carinho em mim, e amo quando você deita no meu peito e eu fico só te olhando, pensando no quanto eu amo você.</p>

<p>Obrigada por me fazer sentir amada de verdade. Obrigada por me mostrar que alguém pode me amar por quem eu sou, e não por quem eu preciso fingir ser.</p>

<p>Mesmo quando a gente briga, o amor continua sendo nítido. A gente se ama, e isso aparece em cada detalhe.</p>

<p>Eu só desejo que você seja feliz de verdade. Que você consiga aproveitar a vida, viver de um jeito mais leve, ser quem você realmente é e nunca parar de ser essa pessoa que eu amo tanto.</p>

<p>Feliz aniversário, meu amor. Eu te amo muito. ❤️</p>

<h3>🏁 LINHA DE CHEGADA ALCANÇADA</h3>
<h3>20 voltas completas.</h3>
<h3>20 anos completos.</h3>
<h3>Mas ainda é só o começo da corrida ❤️</h3>
`;
}
