// YOUR CODE BELOW
let ticTacToe = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    move: function(character, rowNum, colNum)
    {
        let currentCell = [];
        currentCell = this.board[rowNum][colNum];
        if (!currentCell) 
        {
            this.board[rowNum][colNum] = character;
        }
        return this.board;
    }, 

    clear: function()
    {
        return this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        // return this.board;
    }
};
move();