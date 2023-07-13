import Logo from "components/Logo/Logo";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import { API_URL } from "config/apiUrl";
import { IPlugins } from "interface/plugins.interface";
import { FaAdjust } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import * as S from "./Navigation.styles";

interface IProps {
  data: IPlugins;
}

const Navigation: React.FC<IProps> = ({ data }) => {
  const { tabdata, tabs } = data.data;
  const { plugin } = useParams<{ plugin: string }>();

  const handleTooltip = async (active: boolean) => {
    const url = `${API_URL}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        field: "disabled",
        fieldStatus: !active,
      }),
    });
  };

  return (
    <S.NavigationWrapper>
      <Logo />

      <S.TabList>
        {tabs.map((tab) => {
          const title = tabdata[tab].title.toLocaleLowerCase();
          const isActive = plugin === title;
          const url = `/${title}`;
          return (
            <S.TabItem active={isActive}>
              <Link to={url} state={{ tabKey: tab }}>
                <FaAdjust /> <span>{title}</span>
              </Link>
            </S.TabItem>
          );
        })}
      </S.TabList>

      <S.Footer>
        <ToggleSwitch
          label="All plugins enabled"
          labelPosition="left"
          callback={handleTooltip}
        />
      </S.Footer>
    </S.NavigationWrapper>
  );
};

export default Navigation;
