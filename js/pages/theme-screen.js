import { setItem } from '../utils/local-storage.js';
import { navigateTo } from '../utils/navigateTo.js';
import { hoverAudio, setupBackgroundMusic } from '../utils/utils.js';

export const themeScreen = () => {
  const main = document.createElement('div');
  main.id = 'theme-screen-container';
  main.classList.add('main');
  let img;
  let backgroundMusic;

  const teamsList = [
    {
      id: 'barcelona-theme',
      class: 'img-emblema',
      classBG: 'bg-yamal',
      src: './assets/imagem-theme/emblema/barcelona-emblema.png',
      alt: 'emblema do barcelona',
    },
    {
      id: 'real-theme',
      class: 'img-emblema',
      classBG: 'bg-vini',
      src: './assets/imagem-theme/emblema/real-madrid-emblema.png',
      alt: 'emblema do real madrid',
    },
    {
      id: 'city-theme',
      class: 'img-emblema',
      classBG: 'bg-foden',
      src: './assets/imagem-theme/emblema/manchester-city-emblema.png',
      alt: 'emblema do manchester city',
    },
  ];

  const montaPagina = () => {
    const { containerWelcome, containerImages, h1, h3 } = criaElementos();
    adicionaEstilos(containerWelcome, containerImages, h1, h3);
    setaConteudo(h1, h3);
    adicionaContainerWelcome(containerWelcome, h3, h1);
    listaImages(containerImages);
    adicionaMain(containerWelcome, containerImages);
  };

  const criaElementos = () => {
    const containerWelcome = document.createElement('div');
    const containerImages = document.createElement('div');

    const h3 = document.createElement('h3');
    const h1 = document.createElement('h1');

    return {
      containerImages,
      containerWelcome,
      h3,
      h1,
    };
  };

  const adicionaEstilos = (containerWelcome, containerImages, h1, h3) => {
    containerWelcome.classList.add('container-welcome-user');
    containerImages.classList.add('container-images');

    h1.classList.add('h1-title');
    h3.classList.add('h3-title');
  };

  const setaConteudo = (h1, h3) => {
    h3.textContent = 'Bem-Vindo Ao';
    h1.textContent = 'The Best Guessing Game of the World';
  };

  const adicionaContainerWelcome = (containerWelcome, h3, h1) => {
    containerWelcome.appendChild(h3);
    containerWelcome.appendChild(h1);
  };

  const listaImages = (containerImages) => {
    teamsList.forEach((item) => {
      img = document.createElement('img');
      img.id = item.id;
      img.classList.add(item.class);

      img.classList.add('classBG');

      img.src = item.src;
      img.alt = item.alt;

      handleEventsMouse(img, item.classBG);

      containerImages.appendChild(img);
    });

    return teamsList;
  };

  const adicionaMain = (containerWelcome, containerImages) => {
    main.appendChild(containerWelcome);
    main.appendChild(containerImages);

    return main;
  };

  const handleEventsMouse = (elemento, classBG) => {
    const shadow = ' 0 10px 30px 5px';

    elemento.addEventListener('mouseover', () => {
      main.classList.add(classBG);

      if (classBG === 'bg-yamal') {
        elemento.style.boxShadow = shadow + ' #DA1A32 ';
      } else if (classBG === 'bg-vini') {
        elemento.style.boxShadow = shadow + ' #FEBE10  ';
      } else if (classBG === 'bg-foden') {
        elemento.style.boxShadow = shadow + ' #6CABDD  ';
      } else {
        elemento.style.boxShadow = shadow + ' rgba(0, 0, 0, 0.6)  ';
      }

      hoverAudio();
    });

    elemento.addEventListener('mouseleave', () => {
      main.classList.remove(classBG);

      elemento.style.boxShadow = 'none';
    });

    elemento.addEventListener('click', () => {
      setItem('theme', classBG);

      navigateTo('chooseDificulty');
      // navigateTo('welcomeUser');
    });
  };

  montaPagina();

  return main;
};
