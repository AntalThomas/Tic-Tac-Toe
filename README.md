# Tic-Tac-Toe
SEI Project 1:

Tic Tac Toe is a fun game played between two people taking in turns to try and place their symbol three spots in a row.

## [Click Here](https://antalthomas.github.io/Tic-Tac-Toe/) to see my live project!

## How to play
- Click the link above.
- Player "X" goes first then player "O".
- Take in turns clicking on the grid.
- First player to have their three of their symbol line up WINS!.
- Restart at anytime or after somebody has won by clicking the restart button. ***Coming Soon***


## Initial Plan
1. Create a 9x9 grid with a header.
2. Have the eventListener add text to grid when clicked individually.
3. Have the eventListener cycle through "X" & "O" (taking turns) when clicking.
4. Winner is awarded from an array of predefined positions for either "X" or "O".
5. Winner window is shown once a winner has been awarded.
6. Restart button reloads window.

![Flow Chart](./Images/flowChart.png)

## Extra Plan
1. Scores are kept for each player.
2. Add three themes to pick from at any time at the top left corner of screen.
3. Restart button doesn't refresh the page it just resets the game board.
4. Player chooses symbols before game starts.

## Struggles:
I really struggled with making the event handler take it in turns with applying either a "X" or "O", so for a work around until I figured out how to do that, I just made the user cycle through the options with a click. I eventually found help on stack overflow with a similar problem that helped me.

## Bugs to Fix
- Restart refreshes the page instead of resetting everything.  :white_check_mark:
- When a player has won the players can still click on blank cells. :white_check_mark:
- Make prettier.
- Improve code readability.
- Since the whole page resets the scores always reset to 0  :white_check_mark:
- The last players score updates by one if the game is drawn

## Future Features
- Next game button after winner is awarded.  :white_check_mark:
- Keep scores between players.  :white_check_mark:
- Player chosen symbol.
- Different themes that can be chosen at any time.

## Sources used:
https://stackoverflow.com/questions/70950898/how-can-i-turn-these-two-functions-into-a-turn-by-turn-for-naughts-and-crosses

https://www.w3schools.com/css/css_align.asp

https://www.w3schools.com/jsref/prop_style_visibility.asp

https://www.markdownguide.org/cheat-sheet/

https://gist.git.generalassemb.ly/kasun/24d22950b4e29cd275f3e62bc77ccaa1

https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click

https://www.w3schools.com/jsref/met_element_remove.asp

https://stackoverflow.com/questions/56418763/creating-the-perfect-rainbow-gradient-in-css