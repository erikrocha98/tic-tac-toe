import { useState } from "react";
import styled from "styled-components";

const SquareButton = styled.button`
    width:33px;
    height:33px;
`;

export default function Square (){
    const[text,setText]=useState("");

    function handleClick(){
        console.log("quero mudar o texto para x");
        setText("X");
    };
    return (
        <SquareButton onClick={handleClick}>{text}</SquareButton>
    )
}