import { useState } from 'react';
import styled from "styled-components";
import SquareButton from "./buttons/SquareButton";

const StyledField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 66%;
  height: 31%;
  border: 10px solid #DE08EB;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;
  
  @media (min-width: 600px) {
    width: 399px;
    height: 399px;
  }

  @media (max-width: 600px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 550px) {
    width: 300px;
    height: 300px;
  }
`;

const MainFieldDemo = () => {
    const [types] = useState(Array(9).fill('empty'));

    return (
        <StyledField>
            {types.map((type, index) => (
                <SquareButton
                    key={index}
                    type={type}
                />
            ))}
        </StyledField>
    );
};

export default MainFieldDemo;
