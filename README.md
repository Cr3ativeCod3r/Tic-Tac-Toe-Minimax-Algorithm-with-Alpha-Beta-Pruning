# Tic-Tac-Toe Minimax Algorithm with Alpha-Beta Pruning in JavaScript

![image](https://github.com/Cr3ativeCod3r/Tic-Tac-Toe-Minimax-Algorithm-with-Alpha-Beta-Pruning/assets/117399144/262cc00f-ad98-40a0-89d4-3da5e032ca96)

## Overview
This repository contains an implementation of the Minimax algorithm with Alpha-Beta pruning optimized for the Tic-Tac-Toe game in JavaScript. The algorithm is designed to calculate the best possible move for a player, making it suitable for creating challenging computer opponents in the game.

## How It Works
The Minimax algorithm is a popular decision-making algorithm used in artificial intelligence applications, especially in turn-based games like Tic-Tac-Toe. The algorithm simulates all possible moves in the game to determine the best move for a given player.

### Minimax Algorithm
- **Objective**: To find the best move for a player (Maximizing player).
- **Method**: It recursively simulates all possible moves of both players (the maximizing player and the minimizing opponent), then makes a decision based on the best achievable outcome from these simulations.
- **Depth**: Deeper recursion allows for more foresight but requires more computation. You can set it between about 0-6  but in such a simple game like tictactoe you don't need to change this because game tree is relatively  very small oposit to for exmaple chess.

### Alpha-Beta Pruning
- **Purpose**: To reduce the number of nodes evaluated in the Minimax algorithm.
- **Alpha**: The best (highest) value that the maximizer currently can guarantee at that level or above.
- **Beta**: The best (lowest) value that the minimizer currently can guarantee at that level or above.
- **Pruning**: If the value of the current node is worse than the current alpha for the maximizer or beta for the minimizer, the node is pruned (not evaluated further).

## Implementation
The code consists of several key functions:

- `minimax(board, depth, isMaximizingPlayer, alpha, beta)`: Main function implementing the Minimax algorithm with Alpha-Beta pruning.
- `evaluate(board)`: Evaluates the board and returns a score based on the state of the game.
- `isMovesLeft(board)`: Checks if there are any moves left on the board.
- `findBestMove(board)`: Determines the best move for the current player.





