import Logo from "components/Logo/Logo";
import * as S from "./Navigation.styles";

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <Logo />
      <S.TabList>
        <S.TabItem active>yaTab 1</S.TabItem>
        <S.TabItem>Tab 2</S.TabItem>
        <S.TabItem>Tab 3</S.TabItem>
      </S.TabList>
      <S.Footer>something</S.Footer>
    </S.NavigationWrapper>
  );
};

export default Navigation;
