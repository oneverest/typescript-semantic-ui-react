import React from "react";

interface IDisplayProps {
  value: number;
}

function Display({ value }: IDisplayProps) {
  return <h1>{value}</h1>;
}

export default Display;
