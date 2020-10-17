import React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";

interface ColumnProp {
  text: string;
}

export const Column = ({ text }: ColumnProp) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
    </ColumnContainer>
  );
};
