# GuessPlay: The FIFA-Themed Guessing Game Challenge!

## Project Icon

<p align="center">
  <img src="assets/guess-play/guess-play.png" alt="GuessPlay Icon" width="100"/>
</p>

## About the Project

**GuessPlay** is a captivating and interactive guessing game **entirely focused on the world of football, strongly inspired by FIFA teams and stars!** You will test your knowledge and skills against an Artificial Intelligence opponent: **"The Robot"**. Dive into a fun experience where you try to guess a secret number while the Robot tries to guess yours — all set with visual elements from clubs like **Barcelona, Real Madrid, and Manchester City**, celebrating players such as **Lamine Yamal, Vinicius Jr., and Phil Foden**. With different difficulty levels and animated visual feedback, GuessPlay promises hours of challenging entertainment for football fans and game lovers!

## Screenshots

Here are some images to give you a feel of the experience:

**Theme Selection Screen (FIFA Clubs)**

<p align="center">
  <img src="assets/screenshots/chose-themes.png" alt="Theme Selection Screenshot" width="700"/>
</p>

**Difficulty Selection Screen**

<p align="center">
  <img src="assets/screenshots/dificulty.png" alt="Difficulty Selection Screenshot" width="700"/>
</p>

**Gameplay Screen (FIFA Theme)**

<p align="center">
  <img src="assets/screenshots/play.png" alt="Gameplay Screenshot" width="700"/>
</p>

**Victory Screen (Celebrate like on the field!)**

<p align="center">
  <img src="assets/screenshots/gif-win.png" alt="Victory GIF" width="700"/>
</p>

**Defeat Screen (that post-match feeling...)**

<p align="center">
  <img src="assets/screenshots/gif-loser.png" alt="Defeat GIF" width="700"/>
</p>

## Technologies Used

This project was built with a “Vanilla” approach, focusing on the fundamentals of web development:

- **HTML5**: The structural foundation of all screens and game elements.
- **CSS3**: Responsible for styling, responsive layout, and the appealing visual design of the application, including themed styles for each football club.
- **Pure JavaScript (ES6+)**: The core of the game’s logic, built without external frameworks or libraries. Includes:
  - **Module Imports**: JavaScript is modularized for better organization, maintainability, and reusability.
  - **State Management with `localStorage`**: Stores user preferences (like selected theme and player name) for a continuous experience.
  - **Artificial Intelligence Logic**: Implements the "Robot" with distinct behavior for each difficulty level.
  - **DOM Manipulation**: Dynamically interacts with HTML elements to update the user interface.

## Main Features

- **Interactive Guessing Game**: Try to guess the secret number and watch the Robot try to guess yours.
- **FIFA-Themed Visuals**: Choose from themes like **Barcelona, Real Madrid, and Manchester City**, with star player elements to customize the game.
- **Dynamic Difficulty Levels**:
  - **Easy**: The robot guesses a random number between 1 and 50.
  - **Medium**: The robot guesses between your guess and 50. (e.g., if you guess 20, it chooses between 20 and 50.)
  - **Hard**: The robot guesses the exact middle between your guess and 50. (e.g., if you guess 20, it guesses 35.)
- **Immersive Visual Feedback**: Animated GIFs for wins and losses, along with sound effects, simulate a real football match atmosphere.
- **Data Persistence**: Saves your name and chosen theme for future sessions.

## Project Structure

```
GuessPlay/
├── .vscode/
├── assets/
│   ├── audio/
│   ├── guess-play/
│   ├── icon/
│   ├── imagem-theme/
│   └── screenshots/
├── css/
│   ├── difficulty.css
│   ├── global.css
│   ├── inicial.css
│   ├── jogar.css
│   └── welcome-screen.css
├── js/
│   ├── main.js
│   ├── screens.js
│   ├── pages/
│   │   ├── difficulty-screen.js
│   │   ├── play-screen.js
│   │   ├── theme-screen.js
│   │   └── welcome-user.js
│   └── utils/
│       ├── local-storage.js
│       ├── navigateTo.js
│       └── utils.js
└── index.html
```

## How to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gustavocaldeira40/GuessPlay.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd GuessPlay
   ```

3. **Open the `index.html` file:**
   Simply open `index.html` with your preferred web browser.

## How to Play

1. **Select a Team/Theme**: Choose your favorite club.
2. **Pick a Difficulty**: Easy, Medium, or Hard.
3. **Enter Your Name**: Personalize your session.
4. **Start Playing!**: Enjoy the challenge.

## Contributing

1. Fork the repo.
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "add feature"`
4. Push to GitHub: `git push origin feature/your-feature`
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Author

Made with 💙 by **Gustavo Caldeira**

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0e76a8?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gustavo-caldeira40/)  
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/gustavocaldeira40)  
[![GitLab](https://img.shields.io/badge/-GitLab-FC6D26?style=flat&logo=gitlab&logoColor=white)](https://gitlab.com/gustavo.caldeira40/)
