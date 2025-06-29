import { buscaSetTema, buscaTema, setaCor } from '../utils/utils.js';
import { navigateTo } from '../utils/navigateTo.js';
import { setItem } from '../utils/local-storage.js';

export const welcomeUserScreen = () => {
  let nameUser;

  const { main, bgScreen, h1, p, forms, label, input, button } =
    criaElementos();

  //Tema
  const temaEscolhido = buscaSetTema(main);

  const tema = buscaTema();
  const { classToAdd, colorHexa, colorHover } = setaCor(tema);
  const shadowDefault = '0 0 10px ';

  adicionaClasses(main, h1, classToAdd, button, colorHexa, colorHover);

  adicionaAtributos(
    main,
    temaEscolhido,
    bgScreen,
    h1,
    p,
    forms,
    label,
    input,
    button,
  );

  adicionaFilhos(main, bgScreen, h1, p, forms, label, input, button);

  input.addEventListener('focus', (e) => {
    e.preventDefault();

    input.style.boxShadow = shadowDefault + colorHexa;
  });

  input.addEventListener('blur', (e) => {
    e.preventDefault();

    input.style.boxShadow = 'none';
  });

  input.addEventListener('input', ({ target }) => {
    nameUser = target.value.trim();

    const isValid = target.value.trim().length > 0;

    button.disabled = !isValid;
    button.style.opacity = isValid ? 1 : 0.5;
    button.style.cursor = isValid ? 'pointer' : 'not-allowed';
  });

  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !button.disabled) {
      e.preventDefault();
      button.click();
    }
  });

  button.addEventListener('click', (e) => {
    e.preventDefault();
    acaoBotao(nameUser);
  });

  return main;
};

const criaElementos = () => {
  const main = document.createElement('div');
  const bgScreen = document.createElement('div');

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  const forms = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const button = document.createElement('button');

  return {
    main,
    bgScreen,
    h1,
    p,
    forms,
    label,
    input,
    button,
  };
};

const adicionaAtributos = (
  main,
  temaEscolhido,
  bgScreen,
  h1,
  p,
  forms,
  label,
  input,
  button,
) => {
  main.id = 'main';
  main.classList.add('main');

  bgScreen.id = 'bg-screen';

  h1.id = 'h1';

  p.id = 'tema-selecionado';

  h1.textContent = 'Bem-Vindo ao Jogo';
  p.textContent = `Tema selecionado: ${
    temaEscolhido ? temaEscolhido : 'Carregando'
  }`;

  forms.id = 'forms';

  label.htmlFor = 'nome-input';
  label.textContent = 'Nome';

  input.id = 'nome-input';
  input.type = 'text';
  input.placeholder = 'Digite seu nome';

  button.id = 'comecar-jogo';
  button.type = 'submit';
  button.textContent = 'Começar a Jogar';
  button.disabled = false;
  button.style.opacity = 0.5;
  button.style.cursor = 'not-allowed';
};

const adicionaClasses = (
  main,
  h1,
  classToAdd,
  button,
  colorHexa,
  colorHover,
) => {
  main.classList.add('main');

  h1.classList.add(classToAdd);

  button.style.setProperty('--button-bg', colorHexa);
  button.style.setProperty('--button-bg-hover', colorHover);
};

const adicionaFilhos = (main, bgScreen, h1, p, forms, label, input, button) => {
  forms.append(label, input);
  bgScreen.append(h1, p, forms, button);
  main.appendChild(bgScreen);
};

const acaoBotao = (nameUser) => {
  if (nameUser) {
    setItem('nameUser', nameUser);

    navigateTo('play');
  }
};
