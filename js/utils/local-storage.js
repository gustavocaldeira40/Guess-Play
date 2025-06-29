const keyDefault = '@guess-play';

export const setItem = (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(`${keyDefault}:${key}`, stringValue);

    console.log('SALVO');
  } catch (error) {
    console.error(`Erro ao salvar no localStorage: ${error}`);
  }
};

export const getItem = (key) => {
  try {
    const value = localStorage.getItem(`${keyDefault}:${key}`);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Erro ao ler do localStorage: ${error}`);
    return null;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(`${keyDefault}:${key}`);
  } catch (error) {
    console.error(`Erro ao remover do localStorage: ${error}`);
  }
};

export const listKeys = () => {
  try {
    return Object.keys(localStorage);
  } catch (error) {
    console.error(`Erro ao listar chaves do localStorage: ${error}`);
    return [];
  }
};

export const clearKeys = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(`Erro ao limpar o localStorage: ${error}`);
  }
};
