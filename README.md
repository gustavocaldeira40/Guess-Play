# GuessPlay: O Desafio de Adivinhação Temático do FIFA!

## Ícone do Projeto

<p align="center">
  <img src="assets/guess-play/favicon.ico" alt="Ícone GuessPlay" width="100"/>
</p>

## Sobre o Projeto

GuessPlay é um jogo de adivinhação cativante e interativo **totalmente focado no universo do futebol, com uma forte inspiração nos times e estrelas do FIFA!** Você testará suas habilidades e conhecimentos contra um adversário de Inteligência Artificial: "O Robô". Mergulhe em uma experiência divertida onde você tenta adivinhar um número secreto e o Robô tenta adivinhar o seu, tudo isso ambientado com elementos visuais de clubes como **Barcelona, Real Madrid e Manchester City**, celebrando jogadores como Lamine Yamal, Vinicius Jr. e Phil Foden. Com diferentes níveis de dificuldade e feedback visual animado, GuessPlay promete horas de entretenimento desafiador para fãs de futebol e jogos!

## Screenshots

Aqui estão algumas imagens do jogo para você ter uma ideia da experiência:

**Tela de Escolha de Tema (com times do FIFA)**
<p align="center">
  <img src="assets/screenshots/screenshot-tema-times.png" alt="Screenshot da tela de escolha de tema com times" width="700"/>
</p>

**Tela de Escolha de Dificuldade**
<p align="center">
  <img src="assets/screenshots/screenshot-dificuldade.png" alt="Screenshot da tela de escolha de dificuldade" width="700"/>
</p>

**Tela de Jogo (Gameplay com tema FIFA)**
<p align="center">
  <img src="assets/screenshots/screenshot-gameplay-fifa.png" alt="Screenshot da tela de jogo com tema FIFA" width="700"/>
</p>

**Tela de Vitória (comemorando como no campo!)**
<p align="center">
  <img src="assets/screenshots/screenshot-vitoria.gif" alt="GIF de vitória do jogo" width="700"/>
</p>

**Tela de Derrota (aquela sensação pós-jogo...)**
<p align="center">
  <img src="assets/screenshots/screenshot-derrota.gif" alt="GIF de derrota do jogo" width="700"/>
</p>

## Tecnologias Utilizadas

Este projeto foi desenvolvido com uma abordagem "Vanilla", focando na pureza das tecnologias web fundamentais:

* **HTML5**: A base estrutural de todas as telas e elementos do jogo, garantindo a organização do conteúdo.
* **CSS3**: Responsável por toda a estilização, layout responsivo e o design visual atraente da aplicação, incluindo os estilos temáticos dos times de futebol.
* **JavaScript (ES6+) Puro**: O coração da lógica do jogo, implementado sem o auxílio de frameworks ou bibliotecas externas. Isso inclui:
    * **Importação de Módulos**: O código JavaScript é modularizado para melhor organização, manutenibilidade e reusabilidade.
    * **Gerenciamento de Estado com `localStorage`**: Utiliza o armazenamento local do navegador para salvar preferências do usuário (como o tema escolhido) e o nome do jogador, garantindo uma experiência contínua.
    * **Lógica de Inteligência Artificial (IA)**: Implementação do "Robô" que joga contra o usuário, com comportamentos distintos para cada nível de dificuldade.
    * **Manipulação do DOM**: Interage diretamente com os elementos HTML para criar, atualizar e remover a interface do usuário dinamicamente.

## Funcionalidades e Características Principais

* **Jogo de Adivinhação Interativo**: Desafie-se a adivinhar o número secreto e veja o Robô fazer o mesmo.
* **Temática FIFA Aprofundada**: Escolha entre temas de grandes clubes como **Barcelona, Real Madrid e Manchester City**, com elementos visuais de suas estrelas para personalizar a experiência de jogo.
* **Dificuldade Dinâmica**: Escolha um dos três níveis de dificuldade, que alteram o comportamento da IA do Robô:
    * **Fácil**: "Neste modo, o robô chuta um número aleatório entre 1 e 50."
    * **Médio**: "Neste modo, o robô chuta um número entre o seu chute e 50. Exemplo: se você chutar 20, o robô escolherá um número entre 20 e 50."
    * **Difícil**: "Neste modo, o robô chuta o número que estiver exatamente no meio entre o seu chute e 50. Exemplo: se você chutar 20, o robô chutará 35 (a média entre 20 e 50)."
* **Feedback Visual Imersivo**: Gifs animados de vitória e derrota, junto com efeitos sonoros, proporcionam uma experiência altamente interativa e divertida ao usuário, simulando a emoção de uma partida de futebol.
* **Persistência de Dados**: Salva o tema e o nome do usuário para sessões futuras, melhorando a usabilidade e a continuidade do jogo.

## Estrutura do Projeto

O projeto segue uma estrutura de arquivos lógica e organizada:
