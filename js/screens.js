import { themeScreen } from './pages/theme-screen.js';
import { welcomeUserScreen } from './pages/welcome-user.js';

import { playScreen } from './pages/play-screen.js';
import { dificultyScreen } from './pages/difficulty-screen.js';

export const screens = {
  chooseTheme: themeScreen,
  chooseDificulty: dificultyScreen,
  welcomeUser: welcomeUserScreen,
  play: playScreen,
};
