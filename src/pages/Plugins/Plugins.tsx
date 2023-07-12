import Card from "components/Card/Card";
import React from "react";
import * as S from "./Plugins.styles";

const ResponsivePage: React.FC = () => {
  return (
    <S.Wrapper>
      <Card />
      <Card />
      <Card />
    </S.Wrapper>
  );
};

export default ResponsivePage;
