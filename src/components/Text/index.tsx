import React from "react";
import * as S from "./styles";
interface TextProps {
  text: string;
  variant: "h1" | "h2" | "h3" | "p" | "span";
  color?: string;
  size?: string;
  align?: string;
}

export default function Text({ text, variant, ...props }: TextProps) {
  const textTypes = {
    h1: <h1>{text}</h1>,
    h2: <h2>{text}</h2>,
    h3: <h3>{text}</h3>,
    p: <p>{text}</p>,
    span: <span>{text}</span>,
  };
  return (
    <S.TextContainer fontSize={props.size} {...props}>
      {textTypes[variant]}
    </S.TextContainer>
  );
}
