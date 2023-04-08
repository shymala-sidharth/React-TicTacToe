import React from 'react'
import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default function Board() {
  const [xIsNext, setXisNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(e) {
    if (squares[e] || calculateWinner(squares)) {
      return
    }
    const nextSquare = [...squares]
    xIsNext ? (nextSquare[e] = 'X') : (nextSquare[e] = 'O')

    setSquares(nextSquare)
    setXisNext(!xIsNext)
    console.log('clicked')
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 7],
      [1, 4, 7],
      [2, 4, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    const winningLine = lines.find(
      ([a, b, c]) =>
        squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
    )
    return winningLine ? squares[winningLine[0]] : null
  }

  return (
    <React.Fragment>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </React.Fragment>
  )
}
