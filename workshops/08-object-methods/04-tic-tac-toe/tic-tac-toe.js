// YOUR CODE BELOW
// ### Tic Tac Toe

// Define an object 'ticTacToe'.

// Follow the test specs to create a 'board' property, 'move' method, and a 'clear'
// method so you can play a game with your partner.

// The 'board' property is a grid of arrays that represents the board, where each
// cell is initiall null.

// The 'move' method is a method that, given a character, rowNum, and colNum, adds
// the character to the correct cell in the board.

// The 'clear' method should reset the board to all nulls.

// To make it easier to play, have your 'move' method console.log() the
// board before the method returns the board.
let ticTacToe = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    move: function(character, rowNum, colNum)
    {
        let final = ticTacToe.board;
        let currentValue = [];
        let data = [];
        for(let i=0; i<rowNum; i++)
        {
            for(let j=0; j<colNum; j++)
            {
                // data.push([i][j]);
                let value = data(rowNum, colNum);
                data.push(value);
            }
            final.push(data);
        }
        return final;
    }, 

    clear: function()
    {
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        return this.board;
    }
};

console.log(move());