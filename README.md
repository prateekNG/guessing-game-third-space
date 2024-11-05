# Binary Search Game

This **Binary Search Game** web app demonstrates the efficiency of binary search by letting users interactively experience the algorithm. Users pick a number between 1 and 1000, answer a series of yes-or-no questions, and watch as the app narrows down their choice in 10 guesses or fewer!

## Table of Contents
- [Binary Search Game](#binary-search-game)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [How It Works](#how-it-works)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Code Overview](#code-overview)
  - [License](#license)

---

## Features

- **Binary Search Algorithm**: Finds any chosen number between 1 and 1000 in 10 or fewer questions.
- **Interactive User Experience**: Users respond to yes-or-no questions that adjust the guess range in real-time.
- **Responsive Design**: Clean, modern, and mobile-friendly interface.
- **Real-Time Progress**: Remaining guesses are displayed to track progress.

## How It Works

The app employs a binary search algorithm to guess the user's number:
1. It starts with a range of 1 to 1000.
2. Each question asks if the user's number is greater than a mid-point of the range.
3. Based on the user's response, the app halves the search range.
4. This process continues until the app finds the number.

Binary search efficiently divides the range by two with each step, ensuring the number is found in at most 10 guesses.

## Technologies Used

- **HTML**: Provides the structure of the web app.
- **CSS**: Styles the app for a modern and engaging look.
- **JavaScript**: Contains the logic for binary search and manages user interactions.

## Getting Started

To play the Binary Search Game locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/binary-search-game.git
   ```

2. **Navigate to the Project Folder**:
   ```bash
   cd binary-search-game
   ```

3. **Open `index.html` in Your Browser**:
   Double-click or open `index.html` in your preferred browser.

The game will load, and the welcome screen will appear, ready for play.

## Usage

1. **Landing Page**:
   - The landing page provides a brief introduction and instructions.
   - Users pick a number between 1 and 1000 and click **Start the Challenge** to begin.

2. **Guessing Page**:
   - The app will ask, "Is your number greater than [guess]?"
   - Users answer **Yes** or **No** to adjust the guess range.
   - The remaining guesses are displayed on the screen.

3. **Result Page**:
   - The app displays the guessed number when it finds the answer.
   - Users can click **Try Again** to start a new game.

## Code Overview

- **HTML (`index.html`)**: Provides the structure for all screens (landing, guessing, and result).
- **CSS (`style.css`)**: Defines styles for the layout, colors, animations, and responsiveness.
- **JavaScript (`script.js`)**: Handles the binary search logic, updates the displayed guess, and manages user interaction.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as you like.