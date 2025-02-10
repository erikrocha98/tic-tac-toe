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

    function handleClick(){
        const nextSquares = squares.slice();
        nextSquares[0]="X";
        setSquares(nextSquares);
        console.log("quero mudar o texto para x");
    };
    return (
        <>
            <BoardRow>
                <Square handleClick={handleClick} value={squares[0]}/>
                <Square handleClick={handleClick} value={squares[1]}/>
                <Square handleClick={handleClick} value={squares[2]}/>
            </BoardRow>
            <BoardRow>
                <Square handleClick={handleClick} value={squares[3]}/>
                <Square handleClick={handleClick} value={squares[4]}/>
                <Square handleClick={handleClick} value={squares[5]}/>
            </BoardRow>
            <BoardRow>
                <Square handleClick={handleClick} value={squares[6]}/>
                <Square handleClick={handleClick} value={squares[7]}/>
                <Square handleClick={handleClick} value={squares[8]}/>
            </BoardRow>
        </>
    )
}