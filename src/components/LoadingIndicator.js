import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% { 
        content: "";
    }
    25% { 
        content: ".";
    }
    50% { 
        content: "..";
    }
    75% { 
        content: "...";
    }
    100% { 
        content: "";
    }
`;

export default styled.span`
  display: table;
  margin: 6rem auto;

  &::after {
    display: inline-block;
    content: "...";
    animation: ${animation} linear 2s infinite;
  }
`;
