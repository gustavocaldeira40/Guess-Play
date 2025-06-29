import { screens } from '../screens.js';
import { getItem } from './local-storage.js';
import {
  buscaTema,
  criaToggleMusica,
  removeBackgroundThemeClasses,
  setupBackgroundMusic,
  stopBackgroundMusic,
  toggleMusic,
  transitionScreens,
} from './utils.js';

let musicToggleButton = null;
let isToggleButtonCreated = false;

export const navigateTo = (
  screenName,
  addToHistory = true,
  animated = true,
) => {
  const main = document.getElementById('main');

  if (!main) {
    console.error('Elemento Principal Nao Encontrado !');
    return;
  }

  removeBackgroundThemeClasses(main);

  const savedTheme = buscaTema(main);

  if (savedTheme) {
    main.classList.add(savedTheme);
    console.log('Tema aplicado no navigateTo:', savedTheme);
  }

  if (!screens[screenName]) return;

  if (screenName === 'play') {
    stopBackgroundMusic();
    setupBackgroundMusic('../../assets/audio/ambiente.mp3');
  } else {
    stopBackgroundMusic();
    setupBackgroundMusic('../../assets/audio/music_fifa22.mp3');
  }

  const newScreen = screens[screenName]();

  if (!isToggleButtonCreated) {
    musicToggleButton = criaToggleMusica();
    isToggleButtonCreated = true;
    console.log('Botão de toggle de música criado pela primeira vez.');
  }

  if (musicToggleButton && !newScreen.contains(musicToggleButton)) {
    newScreen.appendChild(musicToggleButton);
  }

  if (addToHistory) {
    history.pushState({ screen: screenName }, '', `#${screenName}`);
  }

  if (animated) {
    transitionScreens(main, newScreen);
  } else {
    main.innerHTML = '';
    main.appendChild(newScreen);
  }
};
