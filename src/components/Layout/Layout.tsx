import Navigation from "components/Navigation/Navigation";
import React from "react";
import * as S from "./Layout.styles";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <S.PageWrapper>
      <Navigation />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.PageWrapper>
  );
};

export default Layout;
