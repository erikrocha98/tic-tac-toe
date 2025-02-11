import styled from "styled-components";

const SquareButton = styled.button`
    width:33px;
    height:33px;    
`;

type squareProps={
    value: string;
    handleClick: () => void;
}

export default function Square ({value, handleClick}: squareProps){
    
    return (
        <SquareButton onClick={handleClick}>{value}</SquareButton>
    )
}