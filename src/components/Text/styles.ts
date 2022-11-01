import styled from "styled-components";

export const TextContainer = styled.div<{
  color?: string;
  fontSize?: string;
  align?: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.align};
`;
