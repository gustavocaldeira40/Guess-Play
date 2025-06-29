import { getItem } from '../utils/local-storage.js';
import { navigateTo } from '../utils/navigateTo.js';
import {
  buscaTema,
  setaCor,
  setupBackgroundMusic,
  stopBackgroundMusic,
} from '../utils/utils.js';

export const playScreen = () => {
  let numeroSecreto;
  let usuarioChute;
  let tentativasRestantesUsuario;
  let roboChute = 0;
  let minRobo;
  let maxRobo;

  const tema = buscaTema();
  const { classToAdd, colorHexa, colorHover } = setaCor(tema);

  const dificulty = getItem('dificulty');

  console.log('DIFICULDADE', dificulty);

  const criaElementos = () => {
    const main = document.createElement('div');
    main.id = 'main';

    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.style.transition = 'opacity 0.5s ease-in-out';

    const loadingText = document.createElement('p');
    loadingText.id = 'loading-text';
    loadingText.textContent = 'Robô pensando...';

    loadingScreen.appendChild(loadingText);

    const bgScreen = document.createElement('div');
    bgScreen.id = 'bg-screen';

    const h1 = document.createElement('h1');
    h1.id = 'h1';

    const h3 = document.createElement('h3');
    h3.id = 'h3RegraJogo';

    const pRegras = document.createElement('p');
    pRegras.id = 'p-regras';

    const forms = document.createElement('form');
    forms.id = 'forms';

    const label = document.createElement('label');
    label.htmlFor = 'numero-input';
    label.textContent = 'Número';

    const input = document.createElement('input');
    input.id = 'numero-input';
    input.type = 'number';
    input.placeholder = 'Tente sua sorte ...';

    const containerTentativas = document.createElement('div');
    containerTentativas.id = 'container-tentativas-retantes';

    const pTentativas = document.createElement('p');
    pTentativas.textContent = 'Tentativas Restantes: ';
    const strongTentativas = document.createElement('strong');
    strongTentativas.textContent = '3';

    const containerMensagemUsuario = document.createElement('div');
    containerMensagemUsuario.id = 'container-mensagem-usuario';
    containerMensagemUsuario.classList.add('esconde-container');

    const h2 = document.createElement('h2');
    h2.id = 'mensagem-usuario';
    h2.style.transition = 'color 0.3s ease-in-out';

    const pMensagemOrientacao = document.createElement('p');
    pMensagemOrientacao.id = 'mensagem-orientacao';
    pMensagemOrientacao.style.color = '#fff';
    pMensagemOrientacao.style.fontSize = 'small';

    const gifVitoria = document.createElement('img');
    gifVitoria.id = 'gif-vitoria';
    gifVitoria.className = 'gif-jogadores';
    gifVitoria.style.display = 'none';

    const gifDerrota = document.createElement('img');
    gifDerrota.id = 'gif-derrota';
    gifDerrota.className = 'gif-jogadores';
    gifDerrota.style.display = 'none';

    const containerButtons = document.createElement('div');
    containerButtons.id = 'container-buttons';

    const btnMudarDificuldade = document.createElement('button');
    btnMudarDificuldade.id = 'mudar-dificuldade';
    btnMudarDificuldade.textContent = 'Alterar Dificuldade';

    const btnChutar = document.createElement('button');
    btnChutar.id = 'btn-chutar';
    btnChutar.type = 'button';
    btnChutar.textContent = 'Tentar Chute';

    const btnJogarNovamente = document.createElement('button');
    btnJogarNovamente.id = 'btn-jogar-novamente';
    btnJogarNovamente.type = 'button';
    btnJogarNovamente.textContent = 'Jogar Novamente';
    btnJogarNovamente.style.display = 'none';

    containerMensagemUsuario.append(
      h2,
      pMensagemOrientacao,
      gifVitoria,
      gifDerrota,
      btnJogarNovamente,
    );
    forms.append(label, input);
    containerTentativas.append(pTentativas, strongTentativas);
    containerButtons.append(btnChutar, btnMudarDificuldade);
    bgScreen.append(
      containerMensagemUsuario,
      h1,
      h3,
      pRegras,
      forms,
      containerTentativas,
      containerButtons,
    );
    main.append(bgScreen, loadingScreen);

    document.body.appendChild(main);

    return {
      main,
      input,
      btnChutar,
      btnJogarNovamente,
      strongTentativas,
      h2,
      pMensagemOrientacao,
      containerMensagemUsuario,
      h1,
      h3,
      gifDerrota,
      gifVitoria,
      loadingScreen,
      loadingText,
      btnMudarDificuldade,
    };
  };

  const {
    main,
    input,
    btnChutar,
    btnJogarNovamente,
    strongTentativas,
    h2,
    pMensagemOrientacao,
    containerMensagemUsuario,
    h1,
    h3,
    gifVitoria,
    gifDerrota,
    loadingScreen,
    loadingText,
    btnMudarDificuldade,
  } = criaElementos();

  h1.classList.add(classToAdd);

  btnChutar.style.setProperty('--button-bg', colorHexa);
  btnChutar.style.setProperty('--button-bg-hover', colorHover);

  const nameUser = getItem('nameUser') || 'Jogador';

  const showLoading = (message) => {
    loadingScreen.style.display = 'flex';
    loadingScreen.style.opacity = '1';
    loadingText.textContent = message;
  };

  const hideLoading = () => {
    loadingScreen.style.opacity = '0';

    loadingScreen.style.display = 'none';
  };

  const mostraContainerMensagem = () => {
    containerMensagemUsuario.offsetWidth;
    containerMensagemUsuario.classList.remove('esconde-container');
    containerMensagemUsuario.classList.add('mostra-container');
  };

  const escondeContainerMensagem = () => {
    containerMensagemUsuario.classList.remove('mostra-container');
    containerMensagemUsuario.classList.add('esconde-container');
  };

  const iniciaJogo = () => {
    numeroSecreto = Math.round(Math.random() * 49 + 1);
    console.log('NUMERO SECRETO ', numeroSecreto);
    tentativasRestantesUsuario = 5;
    strongTentativas.textContent = tentativasRestantesUsuario;
    input.disabled = false;
    input.value = '';
    h2.textContent = '';
    pMensagemOrientacao.textContent = '';
    hideLoading();

    setupBackgroundMusic('../../assets/audio/ambiente.mp3');

    escondeContainerMensagem();
    gifDerrota.style.display = 'none';
    gifVitoria.style.display = 'none';
    btnJogarNovamente.style.display = 'none';
    btnChutar.disabled = true;
    btnChutar.style.opacity = 0.2;
    btnChutar.style.cursor = 'not-allowed';
    h1.textContent = `Olá ${nameUser}, bora jogar?`;
    h3.textContent =
      'Digite um numero apos isso o vez do robo que é sei adversário, que vença o melhor !';

    //Seta os parametros do robo numero min e max que ele pode chutar
    minRobo = 1;
    maxRobo = 50;
    roboChute = 0;

    setaGif();
  };

  const setaGif = () => {
    const pathGif = '../assets/imagem-theme/gif/';
    const tema = buscaTema();

    if (tema) {
      switch (tema) {
        case 'bg-yamal': {
          gifVitoria.src = pathGif + 'yamal-animado.gif';
          gifDerrota.src = pathGif + 'yamal-triste.gif';
          break;
        }
        case 'bg-vini': {
          gifVitoria.src = pathGif + 'vini-jr-animado-2.gif';
          gifDerrota.src = pathGif + 'vini-jr-triste.gif';
          break;
        }
        case 'bg-foden': {
          gifVitoria.src = pathGif + 'foden-animado.gif';
          gifDerrota.src = pathGif + 'foden-triste.gif';
          break;
        }
        default:
          return null;
      }
    }
  };

  const validacao = (value) => {
    const num = parseFloat(value);
    if (num >= 1 && num <= 50) {
      h2.textContent = '';
      // containerMensagemUsuario.style.display = 'none';
      escondeContainerMensagem();
      habilitaBotaoChutar();
    } else {
      mostraErro('Digite um número entre 1 e 50');
      btnChutar.disabled = true;
      btnChutar.style.opacity = 0.2;
      btnChutar.style.cursor = 'not-allowed';
    }
  };

  const mostraErro = (mensagem) => {
    h2.textContent = mensagem;
    h2.style.color = '#ff0000';
    h2.style.fontSize = 'small';
    // containerMensagemUsuario.style.display = 'block';
    mostraContainerMensagem();
  };

  const mostraDica = (chuteJogador, isRobo = false) => {
    const dica =
      chuteJogador > numeroSecreto ? `O número é menor` : `O número é maior`;

    containerMensagemUsuario.style.position = 'absolute';
    containerMensagemUsuario.style.top = '5%';
    containerMensagemUsuario.style.left = '15%';
    containerMensagemUsuario.style.transform = 'translateX(-20%)';
    containerMensagemUsuario.style.textAlign = 'center';

    h2.textContent = `${isRobo ? `Robô chutou ${chuteJogador}. ` : ''}${dica}`;
    h2.style.color = '#fff';
    h2.style.fontSize = '1em';
    mostraContainerMensagem();
  };

  const acertou = (jogador) => {
    containerMensagemUsuario.style.top = '50%';
    containerMensagemUsuario.style.left = '50%';
    containerMensagemUsuario.style.transform = 'translate(-50%, -50%)';

    if (jogador === 'usuario') {
      h2.textContent = `Parabéns ${nameUser.toUpperCase()}, você acertou!`;

      h2.style.color = '#00DD00';

      gifVitoria.style.display = 'block';
      gifDerrota.style.display = 'none';

      setupBackgroundMusic('../../assets/audio/aplausos.wav');
    } else {
      h2.textContent = `O Robô acertou o número ${numeroSecreto}! Você perdeu.`;
      h2.style.color = '#ff0000';
      gifDerrota.style.display = 'block';
      gifVitoria.style.display = 'none';
      setupBackgroundMusic('../../assets/audio/boo.mp3');
    }

    pMensagemOrientacao.textContent =
      'Clique no Botão Jogar Novamente para jogar.';
    mostraContainerMensagem();
    // input.disabled = true;
    btnJogarNovamente.style.display = 'inline-block';
    hideLoading();
    desabilitaBotaoChutar();
  };

  const processaChute = (numeroChutado, isRobo) => {
    if (numeroChutado == numeroSecreto) {
      acertou(!isRobo ? 'usuario' : 'robo');
      return 'gameover';
    } else {
      // se o numero for maior que o secreto significa que o maximo e o numero que o usuario disse
      if (numeroChutado > numeroSecreto) {
        // se o numero que for chutado for 30 e o max for 40 ele seta, agora se o max for 40 e tentar setar 30 nao funciona

        if (numeroChutado > maxRobo) {
          maxRobo = maxRobo;
        } else {
          maxRobo = numeroChutado - 1;
        }

        //se o numero for menor o max fica com o numero que o usuario chutou
      } else if (numeroChutado < numeroSecreto) {
        if (numeroChutado < minRobo) {
          minRobo = minRobo;
        } else {
          minRobo = numeroChutado + 1;
        }
      }

      console.log('MIN E MAX', [minRobo, maxRobo]);
      console.log('DIFICULTY', dificulty);

      if (!isRobo) {
        tentativasRestantesUsuario--;
        strongTentativas.textContent = tentativasRestantesUsuario;
        mostraDica(numeroChutado, false);

        if (tentativasRestantesUsuario === 0) {
          containerMensagemUsuario.style.top = '50%';
          containerMensagemUsuario.style.left = '50%';
          containerMensagemUsuario.style.transform = 'translate(-50%, -50%)';

          setupBackgroundMusic('../../assets/audio/boo.mp3');

          h2.textContent = 'Você excedeu o número de tentativas!';
          h2.style.color = '#ff0000';
          pMensagemOrientacao.textContent =
            'Clique no Botão Jogar Novamente para jogar.';
          gifDerrota.style.display = 'block';
          gifVitoria.style.display = 'none';
          mostraContainerMensagem();
          input.disabled = true;
          btnJogarNovamente.style.display = 'inline-block';
          desabilitaBotaoChutar();
          return 'gameover';
        } else {
          return 'chamarRobo';
        }
      }
    }
    return 'continue';
  };

  const chamaJogadaRobo = () => {
    input.disabled = true;
    desabilitaBotaoChutar();

    setTimeout(async () => {
      escondeContainerMensagem();
      showLoading('Robô Pensando');
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const status = await jogadaRobo();
      console.log('STATUS', status);

      if (tentativasRestantesUsuario > 0 && status !== 'gameover') {
        showLoading(`Sua Vez`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        hideLoading();
        escondeContainerMensagem();
        input.disabled = false;
        input.value = '';
        input.focus();
      } else {
        hideLoading();
      }
    }, 1000);
  };

  const jogadaRobo = async () => {
    if (minRobo > maxRobo) {
      roboChute = minRobo;
    } else {
      if (dificulty === 'medium') {
        roboChute =
          Math.floor(Math.random() * (maxRobo - minRobo + 1)) + minRobo;
      } else if (dificulty === 'hard') {
        roboChute = Math.floor((minRobo + maxRobo) / 2);
      } else if (dificulty === 'easy') {
        roboChute = Math.round(Math.random() * 49 + 1);
      }
    }

    showLoading(`Robô chutou: ${roboChute}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const statusProcessamentoRobo = processaChute(roboChute, true);
    return statusProcessamentoRobo;
  };

  const habilitaBotaoChutar = () => {
    btnChutar.disabled = false;
    btnChutar.style.cursor = 'pointer';
    btnChutar.style.opacity = 1;
  };

  const desabilitaBotaoChutar = () => {
    btnChutar.disabled = true;
    btnChutar.style.cursor = 'not-allowed';
    btnChutar.style.opacity = 0.2;
  };

  input.addEventListener('focus', (e) => {
    const shadowDefault = '0 0 10px ';

    e.preventDefault();

    input.style.boxShadow = shadowDefault + colorHexa;
  });

  input.addEventListener('blur', (e) => {
    e.preventDefault();

    input.style.boxShadow = 'none';
  });

  input.addEventListener('input', ({ target }) => {
    usuarioChute = parseInt(target.value);
    validacao(usuarioChute);
  });

  btnChutar.addEventListener('click', async () => {
    const status = processaChute(usuarioChute, false);

    if (status === 'gameover') {
      console.log('ACABOU');
    } else if (status === 'chamarRobo') {
      chamaJogadaRobo();
    }
  });

  btnMudarDificuldade.addEventListener('click', () => {
    navigateTo('chooseDificulty');
  });

  btnJogarNovamente.addEventListener('click', () => iniciaJogo());

  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !btnChutar.disabled) {
      e.preventDefault();
      btnChutar.click();
    }
  });

  iniciaJogo();

  return main;
};
