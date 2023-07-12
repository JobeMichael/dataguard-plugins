import Logo from "components/Logo/Logo";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import { FaAdjust } from "react-icons/fa";
import * as S from "./Navigation.styles";

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <Logo />
      <S.TabList>
        <S.TabItem active>
          <FaAdjust /> <span>Tab one</span>
        </S.TabItem>
        <S.TabItem>
          <FaAdjust /> <span>Tab one</span>
        </S.TabItem>
        <S.TabItem>
          <FaAdjust /> <span>Tab one</span>
        </S.TabItem>
      </S.TabList>
      <S.Footer>
        <ToggleSwitch label="All plugins enabled" labelPosition="left" />
      </S.Footer>
    </S.NavigationWrapper>
  );
};

export default Navigation;
