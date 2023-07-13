import Navigation from "components/Navigation/Navigation";
import { IPlugins } from "interface/plugins.interface";
import React from "react";
import * as S from "./Layout.styles";

interface IProps {
  data: IPlugins;
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ data, children }) => {
  return (
    <S.PageWrapper>
      <Navigation data={data} />
      <S.ContentWrapper>
        <S.Title>Marketing plugins</S.Title>
        {children}
      </S.ContentWrapper>
    </S.PageWrapper>
  );
};

export default Layout;
