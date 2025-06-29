import { setItem } from '../utils/local-storage.js';
import { navigateTo } from '../utils/navigateTo.js';
import {
  buscaSetTema,
  buscaTema,
  hoverAudio,
  setaCor,
} from '../utils/utils.js';

export const dificultyScreen = () => {
  const tema = buscaTema();
  const { classToAdd } = setaCor(tema);

  const { main, bgScreen, h1, divMessage } = criaElementos();
  //Tema
  const temaEscolhido = buscaSetTema(main);

  const buttons = [
    {
      id: 'easy',
      label: 'Fácil',
      message: 'Neste modo, o robô chuta um número aleatório entre 1 e 50.',
    },
    {
      id: 'medium',
      label: 'Médio',
      message:
        'Neste modo, o robô chuta um número entre o seu chute e 50. Exemplo: se você chutar 20, o robô escolherá um número entre 20 e 50.',
    },
    {
      id: 'hard',
      label: 'Difícil',
      message:
        'Neste modo, o robô chuta o número que estiver exatamente no meio entre o seu chute e 50. Exemplo: se você chutar 20, o robô chutará 35 (a média entre 20 e 50).',
    },
  ];

  const divButtons = document.createElement('div');
  divButtons.id = 'container-buttons';

  buttons.forEach((item) => {
    const divMensagemButton = document.createElement('div');
    divMensagemButton.id = 'container-mensagem';

    const button = document.createElement('button');
    button.id = item.id;
    button.textContent = item.label;
    button.classList.add('difficulty-button');

    const pMessage = document.createElement('p');
    pMessage.classList.add('p-message');

    pMessage.textContent = '...';

    divMensagemButton.append(button, pMessage);

    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#fff';
      button.style.color = '#1c1c1c';
      button.style.transform = 'scale(1.01)';

      pMessage.textContent = item.message;

      pMessage.classList.add('mostra-mensagem');

      hoverAudio();
    });

    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'transparent';
      button.style.color = '#fff';
      button.style.transform = 'scale(1)';

      pMessage.textContent = '...';

      pMessage.classList.remove('mostra-mensagem');
    });

    button.addEventListener('click', () => {
      setItem('dificulty', item.id);
      navigateTo('welcomeUser');
    });

    button.style.opacity = 1;

    divButtons.appendChild(divMensagemButton);
  });

  adicionaClasses(main, h1, tema, classToAdd);

  adicionaAtributos(main, temaEscolhido, bgScreen, h1);

  adicionaFilhos(main, bgScreen, h1, divButtons);

  return main;
};

const criaElementos = () => {
  const main = document.createElement('div');
  const bgScreen = document.createElement('div');

  const divMessage = document.createElement('div');
  divMessage.id = 'message-user';

  const h1 = document.createElement('h1');

  h1.textContent = 'Selecione uma dificuldade';

  return {
    main,
    bgScreen,
    h1,
    divMessage,
  };
};

const adicionaAtributos = (main, temaEscolhido, bgScreen, h1) => {
  main.id = 'main';
  main.classList.add('main');

  h1.id = 'title';

  bgScreen.id = 'bg-screen';
};

const adicionaClasses = (main, h1, tema, classToAdd) => {
  main.classList.add('main');

  h1.classList.add(classToAdd);

  console.log('TEMA ADD CLASS', tema, h1);
};

const adicionaFilhos = (main, bgScreen, h1, divButtons) => {
  bgScreen.append(h1, divButtons);
  main.appendChild(bgScreen);
};
