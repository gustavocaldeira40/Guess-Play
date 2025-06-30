import { getItem, setItem } from './local-storage.js';

let backgroundMusic = null;
let hasInteracted = false;
let isMuted = false;
let originalVolume = 0.2;

export const criaToggleMusica = () => {
  const btnToggle = document.createElement('button');
  btnToggle.id = 'btn-toggle';

  const isMuted = getItem('isMuted');

  const toggle = document.createElement('img');
  toggle.id = 'toggle';

  toggle.src =
    isMuted === true || isMuted === 'true'
      ? '../../assets/icon/mute.png'
      : '../../assets/icon/speaker.png';

  btnToggle.appendChild(toggle);

  btnToggle.addEventListener('click', (e) => {
    const muted = toggleMusic();
    toggle.src = muted
      ? '../../assets/icon/mute.png'
      : '../../assets/icon/speaker.png';
  });

  return btnToggle;
};

const userInteractionListener = () => {
  if (!hasInteracted && backgroundMusic && backgroundMusic.paused) {
    tocaMusica();
    hasInteracted = true;
    document.removeEventListener('mousemove', userInteractionListener);
    document.removeEventListener('click', userInteractionListener);
    document.removeEventListener('keydown', userInteractionListener);
  }
};

document.addEventListener('mousemove', userInteractionListener);
document.addEventListener('click', userInteractionListener);
document.addEventListener('keydown', userInteractionListener);

const getFileName = (path) => path.split('/').pop();

export const setupBackgroundMusic = (pathMusic, volumn) => {
  const savedMuted = getItem('isMuted');
  isMuted = savedMuted === true || savedMuted === 'true';

  if (volumn !== undefined && volumn !== 0) {
    originalVolume = volumn;
  } else if (volumn === undefined) {
    originalVolume = 0.2;
  }

  const newFile = getFileName(pathMusic);
  const currentFile = backgroundMusic ? getFileName(backgroundMusic.src) : null;

  if (backgroundMusic && newFile !== currentFile) {
    backgroundMusic.pause();
    backgroundMusic = null;
    console.log('Música anterior parada porque a nova é diferente.');
  }

  if (backgroundMusic && newFile === currentFile) {
    if (hasInteracted && backgroundMusic.paused) {
      tocaMusica();
    }
    return;
  }

  backgroundMusic = new Audio(pathMusic);
  backgroundMusic.loop = true;
  backgroundMusic.volume = isMuted ? 0 : originalVolume;

  if (hasInteracted) {
    tocaMusica();
  }
};

const tocaMusica = async () => {
  if (backgroundMusic) {
    try {
      await backgroundMusic.play();
      console.log('Música tocando:', backgroundMusic.src);
    } catch (error) {
      console.warn(
        'Erro ao reproduzir música (interação do usuário pendente?):',
        error.message,
      );
      if (!hasInteracted) {
        document.addEventListener('mousemove', userInteractionListener);
        document.addEventListener('click', userInteractionListener);
        document.addEventListener('keydown', userInteractionListener);
      }
    }
  }
};

export const toggleMusic = () => {
  if (!backgroundMusic) {
    console.warn('Nenhuma música de fundo está tocando para mutar/desmutar.');
    return;
  }

  isMuted = !isMuted;

  if (isMuted) {
    backgroundMusic.volume = 0;
    console.log('Música mutada.');
  } else {
    backgroundMusic.volume = originalVolume;
    console.log('Música desmutada.');
    if (backgroundMusic.paused) {
      tocaMusica();
    }
  }

  setItem('isMuted', isMuted);
  return isMuted;
};

export const stopBackgroundMusic = () => {
  if (backgroundMusic) {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    console.log('Música pausada.');
  }
};

export const hoverAudio = () => {
  const hover = new Audio('../../assets/audio/hover-2.wav');

  return hover.play();
};

export const setaCor = (tema) => {
  let classToAdd = '';
  let colorHexa = '';
  let colorHover = '';

  if (tema === 'bg-yamal') {
    classToAdd = 'barcelona-color';
    colorHexa = '#da1a32';
    colorHover = '#a80014';
  } else if (tema === 'bg-vini') {
    classToAdd = 'madrid-color';
    colorHexa = '#febe10';
    colorHover = '#d48a00';
  } else if (tema === 'bg-foden') {
    classToAdd = 'city-color';
    colorHexa = '#6cabdd';
    colorHover = '#4486bd';
  } else {
    classToAdd = '#fff';
    colorHexa = '#fff';
    colorHover = '#dcdcdc';
  }

  return {
    classToAdd,
    colorHexa,
    colorHover,
  };
};

export const buscaSetTema = (main) => {
  const tema = buscaTema(main);
  if (tema) {
    main.classList.add(tema);
  }
  const temaEscolhido = temaDisplay(tema);

  return temaEscolhido;
};

export const buscaTema = (main) => {
  const savedTheme = getItem('theme');

  return savedTheme;
};

export const temaDisplay = (tema) => {
  let temaDisplayed;
  if (tema) {
    switch (tema) {
      case 'bg-yamal': {
        temaDisplayed = 'Barcelona';

        break;
      }
      case 'bg-vini': {
        temaDisplayed = 'Real Madrid';

        break;
      }
      case 'bg-foden': {
        temaDisplayed = 'Manchester City';

        break;
      }
      default:
        return null;
    }
  }
  return temaDisplayed;
};

export const removeBackgroundThemeClasses = (element) => {
  const bgClasses = ['bg-vini', 'bg-yamal', 'bg-foden'];
  element.classList.remove(...bgClasses);
};

export const transitionScreens = (elementMain, screenContent) => {
  const divTransicao = montaBGDark();

  const transitionSound = new Audio('../assets/audio/transition_whoosh.mp3');
  transitionSound.volume = 0.2;
  transitionSound.play().catch((error) => {
    console.log('Erro ao tocar som de transição:', error);
  });

  requestAnimationFrame(() => {
    adicionaClassList(elementMain, 'animate-zoom-in');

    adicionaClassList(divTransicao, 'show');

    setTimeout(() => {
      limpaTela(elementMain);

      elementMain.innerHTML = '';
      elementMain.appendChild(screenContent);

      removeClassList(elementMain, 'animate-zoom-in');
      removeClassList(elementMain, 'animate-zoom-out');

      requestAnimationFrame(() => {
        elementMain.appendChild(screenContent);

        adicionaClassList(elementMain, 'animate-zoom-out');
        removeClassList(divTransicao, 'show');
      });

      setTimeout(() => {
        divTransicao.remove();

        const savedTheme = buscaTema(elementMain);
        if (savedTheme) {
          elementMain.classList.add(savedTheme);
          console.log('Tema reaplicado após transição:', savedTheme);
        }
      }, 1300);
    }, 1000);
  });
};

const montaBGDark = () => {
  const divTransicao = document.createElement('div');
  adicionaClassList(divTransicao, 'transition-bg');
  document.body.appendChild(divTransicao);
  return divTransicao;
};

const limpaTela = (elemento) => {
  elemento.innerHTML = '';
  return elemento;
};

const adicionaClassList = (elemento, classNameList) => {
  elemento.classList.add(classNameList);
};

const removeClassList = (elemento, classNameList) => {
  elemento.classList.remove(classNameList);
};
