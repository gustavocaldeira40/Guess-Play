import { navigateTo } from './utils/navigateTo.js';

document.addEventListener('DOMContentLoaded', () => {
  const screenFromURL = window.location.hash?.replace('#', '') || 'chooseTheme';

  navigateTo(screenFromURL, false, false);

  window.addEventListener('popstate', (event) => {
    const screen = event.state?.screen || 'chooseTheme';

    navigateTo(screen, false, true);
  });
});
