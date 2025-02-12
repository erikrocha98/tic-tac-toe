import { useState } from "react";
import Board from "./board";

export default function Game(){
    const[xIsNext, setXIsNext]=useState<boolean>(true);
    const[history, setHistory]=useState<string[][]>([Array(9).fill("")]);
    const[currentMove, setCurrentMove]= useState(0);
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: string[]){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }
    function jumpTo(nextMove:number){
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 ===0);
    }
    const moves = history.map((squares,move)=>{
        let description;
        if(move>0){
            description = "Go to move #" + move;
        }
        else{
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button onClick={()=>jumpTo(move)}>{description}</button>
            </li>
        )
    })
    return (
        <div>
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}