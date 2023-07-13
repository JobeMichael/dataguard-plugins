import Navigation from "components/Navigation/Navigation";
import { IPlugins } from "interface/plugins.interface";
import React from "react";
import * as S from "./Layout.styles";

interface IProps {
  data: IPlugins;
  setAllDisabled: (active: boolean) => void;
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ data, children, setAllDisabled }) => {
  return (
    <S.PageWrapper>
      <Navigation data={data} setAllDisabled={setAllDisabled} />
      <S.ContentWrapper>
        <S.Title>Marketing plugins</S.Title>
        {children}
      </S.ContentWrapper>
    </S.PageWrapper>
  );
};

export default Layout;
