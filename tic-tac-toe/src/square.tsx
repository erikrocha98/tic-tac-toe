import styled from "styled-components";

const SquareButton = styled.button`
    width:33px;
    height:33px;    
`;

type squareProps={
    value: string;
    handleClick: (i:number) => void;
}

export default function Square ({value, handleClick}: squareProps){
    var i:number;
    return (
        <SquareButton onClick={()=>handleClick(i)}>{value}</SquareButton>
    )
}