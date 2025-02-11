import styled from "styled-components";
import Square from "./square";
import { useState } from "react";

const BoardRow = styled.div`
    width: 100vh;
    height: 33px;
    display: flex;
`

export default function Board() {
    const[squares, setSquares] = useState<Array<string>>(Array(9).fill(""));

    function handleClick(i:number){
        const nextSquares = squares.slice();
        nextSquares[i]="X";
        setSquares(nextSquares);
        console.log("quero mudar o texto para x");
    };
    return (
        <>
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