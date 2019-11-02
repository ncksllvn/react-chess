import React from 'react'
import Square from '../containers/square'

const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const rows = [8, 7, 6, 5, 4, 3, 2, 1]


export default function({board}) {

    // convert from FEN to a 2D array
    board = parseFen(board.fen)

    return (
        <div className="board">
            {rows.map((row, rowIndex) =>
                <div className="board-row" key={row}>
                    {cols.map((col, colIndex) =>
                        <Square id={`${col}${row}`} key={col} symbol={board[rowIndex][colIndex]}></Square>
                    )}
                </div>
            )}
        </div>
    )
}

function parseFen(fen) {

    const boardFen = fen.split(' ')[0]
    const boardFenRows = boardFen.split('/')

    return boardFenRows.map(row => {

        var rowExpanded = []

        for (var charIndex in row){

            let char = row[charIndex]

            if (isNaN(char)){
                rowExpanded.push(char)
                continue
            }

            let i = 0;
            let numEmptySpaces = parseInt(char)

            while (i++ < numEmptySpaces){
                rowExpanded.push('')
            }
        }

        return rowExpanded
    })
}