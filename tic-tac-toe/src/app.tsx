import styled from "styled-components";
import Square from "./square";
import { useState } from "react";

const BoardRow = styled.div`
    width: 100vh;
    height: 33px;
    display: flex;
`

export default function Board() {
    const[xIsNext, setXIsNext]=useState<boolean>(true)
    const[squares, setSquares] = useState<Array<string>>(Array(9).fill(""));

    function calculateWinner(squares: Array<string>):string{
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        //Percorre todas as possíveis configurações de vitória para verificar se há 3 símbolos alinhados.
        for (let i = 0; i<lines.length; i++){
            const [a,b,c] = lines[i];
            if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
                return squares[a];
            }
            
        }
        return "";
    };

    //Função para ajudar na verificação de empate
    function isBoardEmpty(squares: Array<string>): boolean {
        let aux=0;
        for (let i = 0; i<squares.length; i++){
            if(squares[i]!=""){
                aux++;
            }
        }
        if (aux==9){
            return true;
        }
        return false;
    }


    function handleClick(i:number){
        if (squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext){
            nextSquares[i]="X";
        }
        else{
            nextSquares[i]="O";
        }
        setSquares(nextSquares);

        //Garantindo a virada de turno
        setXIsNext(!xIsNext);
    };
    const winner = calculateWinner(squares);
    let status;
    if (winner){
        status = "Winner: " + winner;
    }
    else if(!winner && !isBoardEmpty(squares)) {
        status = "Next player: " + (xIsNext? "x": "O");
    }
    else{
        status = "Empate"
    }
    return (
        <>
            <h1>{status}</h1>
            <BoardRow>
                <Square handleClick={()=>handleClick(0)} value={squares[0]}/>
                <Square handleClick={()=>handleClick(1)} value={squares[1]}/>
                <Square handleClick={()=>handleClick(2)} value={squares[2]}/>
            </BoardRow>
            <BoardRow>
                <Square handleClick={()=>handleClick(3)} value={squares[3]}/>
                <Square handleClick={()=>handleClick(4)} value={squares[4]}/>
                <Square handleClick={()=>handleClick(5)} value={squares[5]}/>
            </BoardRow>
            <BoardRow>
                <Square handleClick={()=>handleClick(6)} value={squares[6]}/>
                <Square handleClick={()=>handleClick(7)} value={squares[7]}/>
                <Square handleClick={()=>handleClick(8)} value={squares[8]}/>
            </BoardRow>
        </>
    )
}