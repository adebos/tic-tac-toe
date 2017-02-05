class TicTacToe {
    constructor() {

        this.field=[[null,null,null],[null,null,null],[null,null,null]];
        this.devisionSymbol = 1;
        this.currentSymbol = 'x';
        //this.currentState = true; // true - free; false = busy;
    }

    getCurrentPlayerSymbol() {

        return this.currentSymbol;
    }

    nextSymbol() {
        if ((this.devisionSymbol % 2) == 1) {
            this.currentSymbol = 'x';
        }
        else{
            this.currentSymbol = 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.field[rowIndex][columnIndex] == null)
        {
            this.devisionSymbol++;
            this.field[rowIndex][columnIndex] = this.currentSymbol;
        }

        this.nextSymbol();
    }

    isFinished() {
        var finish = false;

        if (this.getWinner() != null) {//null - no winner, x or o if there is a winner
            finish = true
        }
        if (this.noMoreTurns() == true) { //true - no run, false there is a run
            finish = true
        }
        return finish;
    }

    getWinner() {
        var winner = null;


            if (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2] && this.field[2][2] != null) {
                winner = this.field[2][2];
            }
            if (this.field[2][0] == this.field[1][1] && this.field[1][1] == this.field[0][2] && this.field[0][2] != null) {
                winner = this.field[0][2];
            }
            if (this.field[0][0] == this.field[0][1] && this.field[0][1] == this.field[0][2] && this.field[0][2] != null) {
                winner = this.field[0][2];
            }
            if (this.field[1][0] == this.field[1][1] && this.field[1][1] == this.field[1][2] && this.field[1][2] != null) {
                winner = this.field[1][2];
            }
            if (this.field[2][0] == this.field[2][1] && this.field[2][1] == this.field[2][2] && this.field[2][2] != null) {
                winner = this.field[2][2];
            }
            if (this.field[0][0] == this.field[1][0] && this.field[1][0] == this.field[2][0] && this.field[2][0] != null) {
                winner = this.field[2][0];
            }
            if (this.field[0][1] == this.field[1][1] && this.field[1][1] == this.field[2][1] && this.field[2][1] != null) {
                winner = this.field[2][1];
            }
            if (this.field[0][2] == this.field[1][2] && this.field[1][2] == this.field[2][2] && this.field[2][2] != null) {
                winner = this.field[2][2];
            }

        return winner;
    }

    noMoreTurns() {

        for(var i=0; i<3; i++){
            for(var j=0; j<3; j++){
                if (this.field[i][j] == null){return false;}
            }
        }
        return true;
    }
    isDraw() {
        var finish = false;

        if (this.getWinner() == null && this.noMoreTurns() == true) {//null - no winner, x or o if there is a winner
            finish = true
        }/*
        if (this.noMoreTurns() == true) { //true - no run, false there is a run
            finish = true
        }*/
        return finish;
    }

    getFieldValue(rowIndex, colIndex) {

        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;

